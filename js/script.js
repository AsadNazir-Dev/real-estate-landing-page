document.addEventListener("DOMContentLoaded", function () {
    // Sample Property Data
    const properties = [
        { id: 1, title: "Luxury Villa", price: "$500,000", description: "This stunning luxury villa is situated in the heart of Beverly Hills and offers breathtaking views of the city. The spacious open-concept living room is designed with high ceilings, premium hardwood floors, and large glass windows, providing plenty of natural light.The fully furnished home includes a modern kitchen with high-end appliances, marble countertops, and custom cabinetry. The master suite features a private balcony, walk-in closet, and spa-like bathroom.", image: "images/property1.jpg" },
        { id: 2, title: "Cozy Apartment", price: "$350,000", description: " this modern, fully-furnished apartment offers convenience and luxury at an affordable price. The apartment features a spacious living area with floor-to-ceiling windows, offering a panoramic city view.The open kitchen is designed with granite countertops, stainless steel appliances, and soft-close cabinetry. The master bedroom includes a king-size bed, walk-in closet, and an attached bathroom.", image: "images/property2.jpg" },
        { id: 3, title: "Modern Bungalow", price: "$700,000", description: "This beautifully designed bungalow offers a blend of contemporary architecture and cozy interiors. Located in Miami, it provides quick access to major highways, shopping malls, and schools.The spacious kitchen comes with custom cabinetry, quartz countertops, and a central island. The living room features a fireplace, wooden flooring, and modern lighting fixtures. The backyard includes a private patio and landscaped garden, perfect for family gatherings.", image: "images/property3.jpg" },
        { id: 4, title: "Pent House", price: "$850,000", description: "A stunning luxury penthouse in the heart of San Francisco, offering breathtaking skyline views. This modern home features floor-to-ceiling windows, a private rooftop terrace, and high-end smart home technology. The spacious open-concept design includes a gourmet kitchen with marble countertops, a spa-inspired master bathroom, and exclusive building amenities like a gym, pool, and concierge service.", image: "images/property4.jpg" },
        { id: 5, title: "Family Home", price: "$450,000", description: "A spacious and cozy family home in a quiet suburban neighborhood of Texas. This property boasts a large backyard, an open kitchen with stainless steel appliances, and a warm living room with a fireplace. Perfect for growing families, it includes multiple bedrooms, a play area, and proximity to top schools and parks. With modern interiors and a welcoming atmosphere, this home is designed for comfort and convenience.", image: "images/property5.jpg" },
        { id: 6, title: "Town House", price: "$400,000", description: "This beautiful townhouse is located in a vibrant neighborhood with easy access to downtown Chicago. Featuring modern architecture, a private patio, and an open floor plan, this home is perfect for families and young professionals.The kitchen is equipped with granite countertops, energy-efficient appliances, and a stylish breakfast bar. The master bedroom features a walk-in closet and a spa-like ensuite bathroom.", image: "images/property6.jpg" },
        { id: 7, title: "stylish Home", price: "$450,000", description: "Experience luxury living in this high-rise condo with a stunning ocean view! Located in Miami’s upscale waterfront district, this condo offers floor-to-ceiling windows, a spacious balcony, and world-class amenities.The modern kitchen includes top-of-the-line appliances, sleek cabinetry, and quartz countertops. The master bedroom has a private balcony, an en-suite spa bath, and a walk-in closet.", image: "images/property7.jpg" },
        { id: 8, title: "Lakefront Cottage", price: "$600,000", description: "This charming countryside farmhouse is perfect for nature lovers and those seeking peaceful living away from the city. Surrounded by lush greenery and open fields, it offers modern comforts with a rustic touch.The large kitchen includes handcrafted wooden cabinetry, farmhouse sinks, and a central island for family gatherings. The cozy living room features a fireplace and exposed wooden beams.", image: "images/property8.jpg" }

        
    ];

    // Check if we are on the Property Details Page
    if (window.location.pathname.includes("property-details.html")) {
        function getPropertyId() {
            const params = new URLSearchParams(window.location.search);
            return params.get("id");
        }

        function displayPropertyDetails() {
            const propertyId = getPropertyId();
            const property = properties.find(p => p.id == propertyId);

            if (property) {
                document.getElementById("property-title").textContent = property.title;
                document.getElementById("property-price").textContent = `Price: ${property.price}`;
                document.getElementById("property-description").textContent = property.description;
                document.getElementById("property-image").src = property.image;
            } else {
                document.querySelector(".property-details").innerHTML = "<h2>Property Not Found</h2>";
            }
        }

        displayPropertyDetails();
    }
});
document.querySelectorAll('.cta').forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent interference from other scripts
    });
});
