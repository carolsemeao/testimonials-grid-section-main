window.addEventListener('DOMContentLoaded', () => {
    let testimonialsContainer = document.querySelector('#testimonials');

    fetch('data.json').then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        }).then((data) => {
            for (let i in data.testimonials) {
                // individual testimonial
                let testimonial = data.testimonials[i];
                let name = testimonial.name;
                let position = testimonial.position;
                let title = testimonial.title;
                let text = testimonial.text;

                let testimonialHtml = `<div class="testimonial">
                    <h1>${name}</h1>
                    <p>${position}</p>
                    <h2>${title}</h2>
                    <p>"${text}"</p>
                </div>`;

                testimonialsContainer.innerHTML += testimonialHtml;
            }
        }).catch((error) => console.error('Unable to fetch data: ', error));
});