import './About.css';
import photo from '../../images/photo.jpg';

function About() {
    return (
        <section className="about">
            <img src={photo} alt="Фотография автора" className="about__photo" />
            <div className="about__info-block">
                <h2 className="about__title">Об авторе</h2>
                <p className="about__description">
                    Меня зовут Алексей. Я фронтенд разработчик. Написал данное приложение в рамках изучения фреймворков React и Express.js на учебном курсе Яндекс Практикум.
                </p>
                <p className="about__description">
                    За 1 год обучения в Я.Практикуме успел написать несколько проектов на React, а также на чистом JavaScript и, конечно, проект на HTML+CSS.
                </p>
                <p className="about__description">
                    В Я.Практикуме меня посвятили в религию БЭМ и кроссплатформенной адаптивной вёрстки, работе в команде и следованию жёстких дедлайнов. Надеюсь эти принципы и навыки положат начало успешной карьеры фронтенд разработчика и будут полезны в создании интересных, интерактивных и крутых проектов.
                </p>
            </div>
        </section>
    )
};

export default About;