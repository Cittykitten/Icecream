// Category switching functionality
        document.addEventListener('DOMContentLoaded', function() {
            const categoryButtons = document.querySelectorAll('.category-btn');
            const categorySections = document.querySelectorAll('.category-section');
            
            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const category = this.getAttribute('data-category');
                    
                    // Update active button
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Show selected category
                    categorySections.forEach(section => {
                        section.classList.remove('active');
                        if (section.id === category) {
                            section.classList.add('active');
                        }
                    });
                });
            });
            
            // Add to cart functionality
            const addToCartButtons = document.querySelectorAll('.add-to-cart');
            
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const productCard = this.closest('.product-card');
                    const productName = productCard.querySelector('h3').textContent;
                    const productPrice = productCard.querySelector('.price').textContent;
                    
                    // Animation effect
                    this.innerHTML = '<i class="fas fa-check"></i>';
                    this.style.background = 'var(--mint)';
                    
                    setTimeout(() => {
                        this.innerHTML = '<i class="fas fa-plus"></i>';
                        this.style.background = '';
                    }, 1000);
                    
                    // In a real application, you would add the product to a cart system here
                    console.log(`Added ${productName} (${productPrice}) to cart`);
                });
            });
        });

