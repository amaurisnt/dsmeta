import icon from '../../assets/img/notification-icon.svg';
import './styles.css';
import axios from 'axios';
import { BASE_URL } from '../../utils/request';
import { toast } from 'react-toastify';

type props = {
    saleId: number;
}

function hendleClick(id :number) {
    axios(`${BASE_URL}/sales/${id}/notification`).then(Response => {
        toast.info("SMS enviado com sucesso!");
    })
}

function NotificationButton( {saleId} : props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => hendleClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;