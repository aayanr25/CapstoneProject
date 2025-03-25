import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Trae Young',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Little Lemon is an absolute gem! The food is insanely good—bursting with fresh, bold flavors that hit you like a Mediterranean dream. Can’t recommend it enough! `,
  },
  {
    fullName: 'Lebron James',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `HOLY. FREAKING. WOW. Little Lemon just blew my taste buds out of the water! This place is an absolute culinary MASTERPIECE.  `,
  },
  {
    fullName: 'Clayton Kershaw',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Little Lemon is a fantastic spot for delicious Mediterranean fare. The flavors are fresh, vibrant, and incredibly satisfying. `,
  },
  {
    fullName: 'Cam Thomas',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `It was good.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
