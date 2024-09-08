import Link from 'next/link';

export default function BookingSuccess() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Booking Successful!</h1>
      <p className="mb-4">
        Thank you for your booking. You will receive a call from our company at the selected time.
      </p>
      <Link href="/" className="bg-secondary text-white px-4 py-2 rounded font-semibold">
        Return to Main Site
      </Link>
    </div>
  );
}