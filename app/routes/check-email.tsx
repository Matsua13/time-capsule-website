// app/routes/check-email.tsx
export default function CheckEmail() {
  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500">
        <h2 className="text-2xl font-bold mb-4">Please, check your e-mail inbox</h2>
        <p className="text-lg">
          A confirmation e-mail has been sent to you. Click on the link to confirm your e-mail address and join us!
        </p>
      </div>
    </div>
  );
}
