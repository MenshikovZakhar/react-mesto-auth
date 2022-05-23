import success from '../images/success.svg';
import error from '../images/error.svg';

function InfoTooltip({ isOpen, onClose, status }) {
    const openedClass = isOpen && 'popup_opened'
    return (
        <section className={`popup ${openedClass}`}>
            <div className="popup__window">
                <button onClick={onClose} className="popup__close-button" type="button" aria-label="Выйти"></button>
                <img className="popup__info-image" src={status ? success : error} alt={status ? "Успешно" : "Ошибка"} />
                <p className="popup__info-text">{status
                    ? "Вы успешно зарегистрировались!"
                    : "Что-то пошло не так! Попробуйте ещё раз."}
                </p>
            </div>
        </section>
    )
}

export default InfoTooltip;