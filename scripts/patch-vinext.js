/**
 * Patch vinext file-matcher.js to replace unavailable node:fs/promises glob
 * with fast-glob (already a transitive dependency).
 *
 * Bug: vinext uses `import { glob } from "node:fs/promises"` which doesn't
 * exist as a named export in any current Node.js version.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const filePath = resolve("node_modules/vinext/dist/routing/file-matcher.js");

try {
  let content = readFileSync(filePath, "utf-8");

  if (content.includes('import { glob } from "node:fs/promises"')) {
    content = content.replace(
      'import { glob } from "node:fs/promises";',
      'import fg from "fast-glob";'
    );

    // Replace the scanWithExtensions function to use fast-glob API
    content = content.replace(
      /export async function\* scanWithExtensions\(stem, cwd, extensions, exclude\) \{[\s\S]*?for await \(const file of glob\(pattern, \{[\s\S]*?\}\)\) \{[\s\S]*?yield file;[\s\S]*?\}[\s\S]*?\}/,
      `export async function* scanWithExtensions(stem, cwd, extensions, exclude) {
    const pattern = buildExtensionGlob(stem, extensions);
    const cwdStr = typeof cwd === "string" ? cwd : (cwd instanceof URL ? cwd.pathname : String(cwd));
    const ignorePatterns = exclude
        ? (typeof exclude === "function" ? undefined : (Array.isArray(exclude) ? exclude.map(String) : [String(exclude)]))
        : undefined;
    const files = await fg(pattern, {
        cwd: cwdStr,
        ...(ignorePatterns ? { ignore: ignorePatterns } : {}),
    });
    for (const file of files) {
        yield file;
    }
}`
    );

    writeFileSync(filePath, content);
    console.log("vinext patched: replaced node:fs/promises glob with fast-glob");
  } else {
    console.log("vinext already patched or different version");
  }
} catch (error) {
  console.warn("vinext patch skipped:", error.message);
}
