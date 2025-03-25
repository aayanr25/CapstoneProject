import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
        Nestled in the heart of Chicago, Little Lemon is a cozy Mediterranean bistro known for its fresh, flavorful dishes and warm, inviting atmosphere. Founded by two brothers who grew up cooking with their grandmother, Little Lemon brings traditional recipes to life with a modern twist. From the famous Greek Salad with crispy lettuce and feta to the zesty Lemon Dessert made from a cherished family recipe, every dish tells a story of passion and heritage. At Little Lemon, guests are welcomed like family and treated to a dining experience that blends comfort, tradition, and unforgettable flavors.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
        <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
