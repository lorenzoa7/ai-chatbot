import Chat from '@/components/Chat'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center py-2">
      <Footer invisible />
      <Chat />
      <Footer />
    </div>
  )
}
