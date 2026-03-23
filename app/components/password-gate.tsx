"use client"

import { useState } from "react"

interface PasswordGateProps {
  children: React.ReactNode
  teaser: React.ReactNode
}

const CASE_PASSWORD = "softplan2025"

export function PasswordGate({ children, teaser }: PasswordGateProps) {
  const [password, setPassword] = useState("")
  const [unlocked, setUnlocked] = useState(false)
  const [error, setError] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (password === CASE_PASSWORD) {
      setUnlocked(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  if (unlocked) {
    return <>{children}</>
  }

  return (
    <div className="mx-auto max-w-2xl px-6 pt-40 pb-32">
      {teaser}
      <form onSubmit={handleSubmit} className="mt-16 space-y-4">
        <label className="swiss-label block text-xs tracking-widest text-[#767676] uppercase">
          Este case é protegido por confidencialidade
        </label>
        <div className="flex gap-3">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError(false)
            }}
            placeholder="Digite a senha"
            className="flex-1 border border-[#e0e0e0] bg-[#fafafa] px-4 py-3 text-sm text-[#141414] outline-none focus:border-[#141414] transition-colors"
          />
          <button
            type="submit"
            className="border border-[#141414] bg-[#141414] px-6 py-3 text-sm text-[#fafafa] hover:bg-transparent hover:text-[#141414] transition-colors"
          >
            Acessar
          </button>
        </div>
        {error && (
          <p className="text-sm text-red-600">Senha incorreta.</p>
        )}
        <p className="text-xs text-[#767676]">
          Solicite a senha por e-mail para acessar o case completo.
        </p>
      </form>
    </div>
  )
}
