const baseUrl = process.env.NODE_ENV === "production" 
? 'https://assispanel.com/api/contact_us' 
: 'https://assispanel.com/api/contact_us';

export default baseUrl;