import React, {useRef} from "react";

const SeachModal = () => {
    const inputRef = useRef('')
    return (
        <div className="search-overlay-menu">
            <span className="search-overlay-close"><i className="icon_set_1_icon-77"></i></span>
            <form role="search" id="searchform" method="get">
                <input name="q" ref={inputRef} type="text" placeholder="Rechercher..." />
                <button type="submit"><i className="icon_set_1_icon-78"></i>
                </button>
            </form>
        </div>
    )
}

export default SeachModal