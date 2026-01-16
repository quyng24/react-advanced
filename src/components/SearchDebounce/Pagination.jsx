import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Pagination = ({page, setPage}) => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, width: "100%"}}>
            <button style={{borderRadius: '100%', width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'centers', color: '#50baf7', border: '1px solid #50baf7'}} onClick={() => setPage(p => p - 1)} disabled={page === 1}><FaArrowLeft/></button>
            <button style={{borderRadius: '100%', width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'centers', color: '#50baf7', border: '1px solid #50baf7'}} onClick={() => setPage(p => p + 1)}><FaArrowRight/></button>
        </div>
    )
}
export default Pagination;