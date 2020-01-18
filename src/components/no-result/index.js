import { h } from 'preact';
import NoData from '../../assets/illustrations/no_data.svg';

const NoResult = () => {
    return (
        <div className="container text-center p-5">
            <img src={NoData} className="w-25 mb-3" />
            <h2>Looks Like There Is No Result <br /> Try Another Keyword</h2>
        </div>
    );
};

export default NoResult;