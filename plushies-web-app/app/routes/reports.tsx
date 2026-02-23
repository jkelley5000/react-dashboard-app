import type { Route } from "./+types/landing-page";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Plushies R Us" },
        { name: "description", content: "Reporting for Plushies R Us" },
    ];
}

export default function Reports() {
    return (
        <main className="theme-container theme-section">
            <section className="theme-card theme-card-padded theme-shadow-md">
                <h1 className="text-4xl font-bold mb-4 theme-text-primary">Reports</h1>
                <p className="text-lg theme-text-muted">This is the reports page.</p>
            </section>
        </main>
    );
}
