import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default function ContactPage() {
    return (
        <main className="container section-padding">
            <Navigation />
            <h1 className="text-3xl text-center hidden font-bold mb-6">Contact</h1>
            <Contact />
            <Footer />
        </main>
    )
}