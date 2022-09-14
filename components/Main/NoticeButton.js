import "./NoticeButton.css";

function NoticeButton() {
    return (
        <div className='notice-btn-content'>
            <div className='notice-board'>
                <div className='notice-text-box'>
                    <div className='notice-text-content'>
                        익명 게시판
                    </div>
                    <div className='notice-content-sub-text'>
                        익명으로 학생들과 소통할수 있습니다.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoticeButton;