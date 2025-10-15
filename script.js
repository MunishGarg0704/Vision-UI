const trialBtn = document.querySelector('.trial-btn');
trialBtn.addEventListener('click', () => {
  alert('Your free trial has started!');
});


document.addEventListener('DOMContentLoaded', () => {
    const animatedCards = document.querySelectorAll('.animate-card');

    animatedCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 200);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const billingToggle = document.getElementById('billingToggle');
    const toggleOptions = document.querySelectorAll('.billing-toggle .toggle-option');
    const priceValues = document.querySelectorAll('.price-value');

    function updatePrices(isYearly) {
        priceValues.forEach(priceElement => {
            const monthlyPrice = priceElement.getAttribute('data-monthly');
            const yearlyPrice = priceElement.getAttribute('data-yearly');
            priceElement.textContent = isYearly ? yearlyPrice : monthlyPrice;
        });
        toggleOptions.forEach(option => {
            if ((isYearly && option.dataset.period === 'yearly') || (!isYearly && option.dataset.period === 'monthly')) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }
    updatePrices(billingToggle.checked);
    billingToggle.addEventListener('change', () => {
        updatePrices(billingToggle.checked);
    });
    toggleOptions.forEach(option => {
        option.addEventListener('click', () => {
            if (option.dataset.period === 'monthly') {
                billingToggle.checked = false;
            } else {
                billingToggle.checked = true;
            }
            updatePrices(billingToggle.checked);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const subscribeButton = document.querySelector('.subscribe-button');
    const animatedArrow = document.querySelector('.animated-arrow');
    if (subscribeButton && animatedArrow) {
        subscribeButton.addEventListener('mouseenter', () => {
            animatedArrow.style.transform = 'translateX(5px)';
        });

        subscribeButton.addEventListener('mouseleave', () => {
            animatedArrow.style.transform = 'translateX(0)';
        });
    }
});

