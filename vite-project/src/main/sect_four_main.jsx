function Sect_Four_Main({imageType, titleType, descType}){
    return(
        <>
            <div className='sect_four_main_column'>
                <div className='sect_four_main_column_img'>
                    <img src={imageType} alt="" />
                </div>
                <div className='sect_four_main_column_title'>
                    <p>{titleType}</p>
                </div>
                <div className='sect_four_main_column_desc'>
                    <p>{descType}</p>
                </div>
            </div>
        </>
    )
}

export default Sect_Four_Main