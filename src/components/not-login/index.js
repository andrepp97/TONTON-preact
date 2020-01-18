import { h } from 'preact';
import { Link } from 'preact-router/match';
import notLoginImg from '../../assets/illustrations/not_login.svg';

const NotLogin = () => {
    return (
        <div className="container p-5 text-center">
            <img src={notLoginImg} className="w-25 mb-5" />
            <div className="row justify-content-center">
                <Link href="/login">
                    <input type="button" className="btn btn-primary px-4" value="Login To Enjoy" />
                </Link>
            </div>
        </div>
    );
};

export default NotLogin;