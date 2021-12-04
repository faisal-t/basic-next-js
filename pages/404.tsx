import { useEffect } from 'react'
import { useRouter } from 'next/router'
export default function Custom404() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000)
  }, [])
  return (
    <div>
      <h1 className="title-notfound">OOps.....</h1>
      <h1 className="title-notfound">Halaman Tidak Ditemukan</h1>
    </div>
  )
}
