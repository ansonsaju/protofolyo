// Service Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Service information - detailed content for each service
    const serviceDetails = {
        'ui-ux': {
            title: 'UI/UX Design',
            description: `<p>My UI/UX Design service focuses on creating intuitive, engaging, and user-centered digital experiences that delight your customers and achieve your business goals.</p>
                <h4>What I Offer:</h4>
                <ul>
                    <li>User Research & Analysis</li>
                    <li>Wireframing & Prototyping</li>
                    <li>Interactive Design</li>
                    <li>Usability Testing</li>
                    <li>Information Architecture</li>
                    <li>UI Animation & Micro-interactions</li>
                </ul>
                <p>Every design is tailored to your specific needs and target audience, ensuring maximum engagement and conversion rates.</p>
                <h4>My Process:</h4>
                <ol>
                    <li>Discovery & Research</li>
                    <li>Strategy & Planning</li>
                    <li>Wireframing & Prototyping</li>
                    <li>Design Implementation</li>
                    <li>Testing & Refinement</li>
                </ol>`,
            image: 'ui-ux-detailed.jpg' // You would need to add these images to your project
        },
        'web-dev': {
            title: 'Web Development',
            description: `<p>My Web Development service delivers modern, responsive, and high-performance websites and web applications that provide excellent user experiences across all devices.</p>
                <h4>Technologies I Work With:</h4>
                <ul>
                    <li>HTML5, CSS3, JavaScript (ES6+)</li>
                    <li>React, Vue.js, Angular</li>
                    <li>Node.js, Express</li>
                    <li>MongoDB, PostgreSQL</li>
                    <li>WordPress, Shopify</li>
                    <li>API Integration & Development</li>
                </ul>
                <p>All websites are built with best practices for SEO, performance optimization, and accessibility.</p>
                <h4>Development Approach:</h4>
                <ol>
                    <li>Planning & Architecture</li>
                    <li>Frontend Development</li>
                    <li>Backend Integration</li>
                    <li>Testing & Quality Assurance</li>
                    <li>Deployment & Maintenance</li>
                </ol>`,
            image: 'web-dev-detailed.jpg'
        },
        'mobile-first': {
            title: 'Mobile-First Design',
            description: `<p>My Mobile-First Design service ensures your digital presence looks and functions perfectly across all devices and screen sizes, prioritizing the mobile experience.</p>
                <h4>Key Features:</h4>
                <ul>
                    <li>Responsive Layouts</li>
                    <li>Touch-Friendly Interface Design</li>
                    <li>Performance Optimization for Mobile</li>
                    <li>Consistent Cross-Device Experience</li>
                    <li>Progressive Web App Development</li>
                    <li>Mobile UX Best Practices</li>
                </ul>
                <p>With mobile traffic accounting for over 50% of web traffic globally, a seamless mobile experience is no longer optional.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Improved User Engagement</li>
                    <li>Higher Conversion Rates</li>
                    <li>Better SEO Rankings</li>
                    <li>Future-Proof Design</li>
                    <li>Broader Audience Reach</li>
                </ul>`,
            image: 'mobile-first-detailed.jpg'
        },
        'seo': {
            title: 'SEO Optimization',
            description: `<p>My SEO Optimization service improves your website's visibility in search engines to drive more organic traffic and increase your business's online presence.</p>
                <h4>Comprehensive SEO Packages:</h4>
                <ul>
                    <li>Technical SEO Audit & Fixes</li>
                    <li>Keyword Research & Strategy</li>
                    <li>On-Page SEO Optimization</li>
                    <li>Content Strategy & Creation</li>
                    <li>Link Building & Off-Page SEO</li>
                    <li>Local SEO & Google Business Profile Optimization</li>
                </ul>
                <p>All strategies are tailored to your industry, competition, and specific business goals.</p>
                <h4>SEO Process:</h4>
                <ol>
                    <li>Initial Assessment & Goal Setting</li>
                    <li>Comprehensive Website Audit</li>
                    <li>Strategy Development</li>
                    <li>Implementation</li>
                    <li>Monitoring & Reporting</li>
                    <li>Refinement & Ongoing Optimization</li>
                </ol>`,
            image: 'seo-detailed.jpg'
        },
        'maintenance': {
            title: 'Website Maintenance',
            description: `<p>My Website Maintenance service ensures your website remains secure, up-to-date, and performing optimally with regular care and attention.</p>
                <h4>Maintenance Services Include:</h4>
                <ul>
                    <li>Regular Software & Plugin Updates</li>
                    <li>Security Monitoring & Threat Prevention</li>
                    <li>Performance Optimization</li>
                    <li>Regular Backups & Recovery Solutions</li>
                    <li>Content Updates & Management</li>
                    <li>Technical Support & Troubleshooting</li>
                </ul>
                <p>Choose from monthly, quarterly, or annual maintenance packages to suit your needs and budget.</p>
                <h4>Why Regular Maintenance Matters:</h4>
                <ul>
                    <li>Improved Security & Protection from Threats</li>
                    <li>Better User Experience & Retention</li>
                    <li>Reduced Downtime & Technical Issues</li>
                    <li>Consistent Performance & Speed</li>
                    <li>Peace of Mind & Reduced Stress</li>
                </ul>`,
            image: 'maintenance-detailed.jpg'
        },
        'branding': {
            title: 'Brand Strategy',
            description: `<p>My Brand Strategy service helps develop comprehensive brand identities that connect with your audience and differentiate you from competitors in meaningful ways.</p>
                <h4>Branding Services:</h4>
                <ul>
                    <li>Brand Discovery & Positioning</li>
                    <li>Visual Identity Development</li>
                    <li>Logo Design & Brand Guidelines</li>
                    <li>Voice & Messaging Strategy</li>
                    <li>Brand Story & Values Development</li>
                    <li>Brand Implementation Across Platforms</li>
                </ul>
                <p>A strong brand creates emotional connections with customers and builds long-term business value.</p>
                <h4>Branding Process:</h4>
                <ol>
                    <li>Research & Discovery</li>
                    <li>Strategy Development</li>
                    <li>Visual Identity Creation</li>
                    <li>Brand Guidelines & Assets</li>
                    <li>Implementation & Launch</li>
                    <li>Brand Growth & Evolution</li>
                </ol>`,
            image: 'branding-detailed.jpg'
        }
    };

    // Create modal container if it doesn't exist
    if (!document.getElementById('service-modal-container')) {
        const modalContainer = document.createElement('div');
        modalContainer.id = 'service-modal-container';
        modalContainer.innerHTML = `
            <div class="service-modal">
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <div class="modal-body">
                        <div class="modal-image">
                            <img src="" alt="Service Image">
                        </div>
                        <div class="modal-text">
                            <h2></h2>
                            <div class="modal-description"></div>
                            <a href="#contact" class="btn modal-cta">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modalContainer);

        // Add modal styles
        const modalStyles = document.createElement('style');
        modalStyles.textContent = `
            #service-modal-container {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.7);
                z-index: 1000;
                overflow-y: auto;
                padding: 50px 0;
            }

            .service-modal {
                max-width: 900px;
                margin: 0 auto;
                position: relative;
            }

            .modal-content {
                background-color: var(--light);
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
                animation: modalFadeIn 0.4s ease;
            }

            body.dark-mode .modal-content {
                background-color: #1f2937;
                color: #f9fafb;
            }

            .modal-body {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 2rem;
            }

            .modal-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }

            .modal-text {
                padding: 2.5rem;
            }

            .modal-text h2 {
                font-size: 2rem;
                margin-bottom: 1.5rem;
                position: relative;
            }

            .modal-text h2:after {
                content: '';
                position: absolute;
                bottom: -10px;
                left: 0;
                width: 60px;
                height: 3px;
                background-color: var(--primary);
            }

            .modal-description {
                margin-bottom: 2rem;
            }

            .modal-description h4 {
                margin: 1.5rem 0 1rem;
                font-size: 1.25rem;
            }

            .modal-description ul, .modal-description ol {
                padding-left: 1.5rem;
                margin-bottom: 1rem;
            }

            .modal-description li {
                margin-bottom: 0.5rem;
            }

            .modal-description p {
                margin-bottom: 1rem;
                line-height: 1.7;
            }

            .modal-cta {
                margin-top: 1rem;
            }

            .close-modal {
                position: absolute;
                top: 20px;
                right: 20px;
                font-size: 30px;
                color: var(--dark);
                cursor: pointer;
                transition: transform 0.3s ease;
                height: 40px;
                width: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: rgba(255,255,255,0.2);
                border-radius: 50%;
                z-index: 10;
            }

            body.dark-mode .close-modal {
                color: white;
            }

            .close-modal:hover {
                transform: rotate(90deg);
            }

            @keyframes modalFadeIn {
                from {
                    opacity: 0;
                    transform: translateY(-30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @media (max-width: 768px) {
                .modal-body {
                    grid-template-columns: 1fr;
                }
                
                .modal-image {
                    height: 250px;
                }
                
                .service-modal {
                    width: 90%;
                }
            }
        `;
        document.head.appendChild(modalStyles);
    }

    // Get modal elements
    const modalContainer = document.getElementById('service-modal-container');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.querySelector('.modal-text h2');
    const modalDescription = document.querySelector('.modal-description');
    const modalImage = document.querySelector('.modal-image img');
    const modalCta = document.querySelector('.modal-cta');

    // Close modal function
    function closeServiceModal() {
        modalContainer.style.display = 'none';
        document.body.style.overflow = '';
    }

    // Close modal when clicking the X
    closeModal.addEventListener('click', closeServiceModal);

    // Close modal when clicking outside
    modalContainer.addEventListener('click', function(e) {
        if (e.target === modalContainer) {
            closeServiceModal();
        }
    });

    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalContainer.style.display === 'block') {
            closeServiceModal();
        }
    });

    // When modal CTA button is clicked, close modal
    modalCta.addEventListener('click', function() {
        closeServiceModal();
    });

    // Add event listeners to all "Learn More" buttons in services section
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        const learnMoreBtn = card.querySelector('.btn');
        const serviceType = getServiceTypeFromIndex(index);
        
        learnMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Set modal content based on service type
            const serviceInfo = serviceDetails[serviceType];
            modalTitle.textContent = serviceInfo.title;
            modalDescription.innerHTML = serviceInfo.description;
            
            // Set placeholder image if no image available
            if (serviceInfo.image && false) { // Disabled for now since we don't have the actual images
                modalImage.src = serviceInfo.image;
                modalImage.alt = serviceInfo.title;
            } else {
                // Use service icon as placeholder
                const iconClass = card.querySelector('.service-icon i').className;
                modalImage.style.display = 'none';
                const modalImageContainer = document.querySelector('.modal-image');
                
                // Clear previous icon if any
                while (modalImageContainer.firstChild) {
                    modalImageContainer.removeChild(modalImageContainer.firstChild);
                }
                
                // Create placeholder with icon
                const iconPlaceholder = document.createElement('div');
                iconPlaceholder.className = 'modal-icon-placeholder';
                iconPlaceholder.innerHTML = `<i class="${iconClass}"></i>`;
                modalImageContainer.appendChild(iconPlaceholder);
                
                // Add placeholder styles if not already added
                if (!document.getElementById('placeholder-styles')) {
                    const placeholderStyles = document.createElement('style');
                    placeholderStyles.id = 'placeholder-styles';
                    placeholderStyles.textContent = `
                        .modal-icon-placeholder {
                            height: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            background-color: rgba(37, 99, 235, 0.1);
                        }
                        
                        .modal-icon-placeholder i {
                            font-size: 5rem;
                            color: var(--primary);
                        }
                        
                        body.dark-mode .modal-icon-placeholder {
                            background-color: rgba(37, 99, 235, 0.2);
                        }
                    `;
                    document.head.appendChild(placeholderStyles);
                }
            }
            
            // Display modal
            modalContainer.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent body scrolling
            
            // Reset scroll position of modal
            modalContainer.scrollTop = 0;
        });
    });

    // Helper function to get service type from index
    function getServiceTypeFromIndex(index) {
        switch(index) {
            case 0: return 'ui-ux';
            case 1: return 'web-dev';
            case 2: return 'mobile-first';
            case 3: return 'seo';
            case 4: return 'maintenance';
            case 5: return 'branding';
            default: return 'ui-ux';
        }
    }
});