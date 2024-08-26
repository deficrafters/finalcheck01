
import { NextResponse } from 'next/server';

export async function GET(request) {


    function getFormattedFutureDate() {
        const currentDate = new Date();
        const futureDate = new Date(currentDate);

        // Add 10 days to the current date
        futureDate.setDate(currentDate.getDate() + 10);

        // Extract the parts of the date
        const day = futureDate.getDate().toString().padStart(2, '0');
        const month = futureDate.toLocaleString('en-GB', { month: 'long' });
        const year = futureDate.getFullYear();
        const hours = futureDate.getHours().toString().padStart(2, '0');
        const minutes = futureDate.getMinutes().toString().padStart(2, '0');

        // Construct the formatted date string
        const formattedDate = `${day} ${month} ${year} ${hours}:${minutes}`;

        return formattedDate;
    }

    console.log(getFormattedFutureDate());


    return NextResponse.json(getFormattedFutureDate());


}