import Link from 'next/link';

export default function BookingError({ searchParams }: { searchParams: { reason: string } }) {
  const errorMessage = 
    searchParams.reason === 'existing_booking' ? "You already have an active booking. Only one booking per user is allowed at a time." :
    searchParams.reason === 'cancel_error' ? "There was an error cancelling your existing booking. Please try again or contact us." :
    searchParams.reason === 'no_booking' ? "No active booking was found to cancel. You can proceed to make a new booking." :
    "There was an error processing your booking. Please call or email us!";

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Booking Error!</h1>
      <p className="mb-4">
        {errorMessage}
      </p>
      <Link href="/" className="bg-secondary text-white px-4 py-2 rounded font-semibold">
        Return to Main Site
      </Link>
    </div>
  );
}