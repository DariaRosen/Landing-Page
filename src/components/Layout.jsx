import { useEffect } from "react"
import { Footer } from "./elements/Footer"
import { Navbar } from "./elements/Navbar"

// Define the expected props for the Layout component
// - title: sets the document's title when this layout is rendered
// - children: the page content to be displayed within the layout
interface LayoutProps {
    title: string
    children: React.ReactNode
}

// The Layout component is a reusable wrapper for pages in your app.
// It provides a consistent Navbar at the top, Footer at the bottom,
// and dynamically updates the page title when rendered.
export const Layout = ({ title, children }: LayoutProps) => {
    // Update the browser tab title whenever the `title` prop changes
    useEffect(() => {
        document.title = title
    }, [title])

    return (
        <>
            {/* Global navigation bar displayed at the top of every page */}
            <Navbar />

            {/* Main content area where page-specific components are rendered */}
            <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
                {children}
            </main>

            {/* Global footer displayed at the bottom of every page */}
            <Footer />
        </>
    )
}
