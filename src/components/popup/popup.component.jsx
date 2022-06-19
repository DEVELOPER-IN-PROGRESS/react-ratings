 import styles from  './popup.css'

const closeModal = () => document.getElementById('aboutPopup').style.display = 'none'

 const Popup = () => {
     return (
        <div id='aboutPopup' className="App__popup-wrapper">
            <div className="App__popup">
                <div title='Close this page' className='close-wrapper' onClick={closeModal}>❌</div>
                <h2>Ratings </h2>
            </div>
        </div>
    );
}

export default Popup;
