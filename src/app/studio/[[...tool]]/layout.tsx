export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This layout intentionally returns only children
  // The studio page component handles its own full-screen rendering
  return children
}
