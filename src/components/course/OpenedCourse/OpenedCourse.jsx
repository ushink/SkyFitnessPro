import YouTube from 'react-youtube'
import ProgressBar from '@ramonak/react-progress-bar'
import Button from '../../UI/button/Button'
import s from './OpenedCourse.module.css'
import sProgress from './ProgressItem.module.css'
import { useState, useEffect } from 'react'
import Modal from '../../UI/modal/Modal'
import ProgressModalItem from './ProgressItem'

const exercises = [
    {
        id: 1,
        text: 'Наклон вперед',
        repetition: '(10 повторений)',
        quantity: 10,
        quantityUser: 0,
    },
    {
        id: 2,
        text: 'Наклон назад',
        repetition: '(10 повторений)',
        quantity: 10,
        quantityUser: 0,
    },
    {
        id: 3,
        text: 'Поднятие ног, согнутых в коленях',
        repetition: '(5 повторений)',
        quantity: 5,
        quantityUser: 0,
    },
]

const OpenedCourse = () => {
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            https: '//www.youtube.com/watch',
            autoplay: 1,
        },
    }

    const [modalActive, setModalActive] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)

    useEffect(() => {
        console.log('modalProgressActive', modalActive)
    }, [modalActive])

    useEffect(() => {
        console.log('exercises', exercises)
    }, [exercises])

    return (
        <div>
            <h1 className={s.title}>Йога</h1>
            <nav className={s.breadCrumbs}>
                Красота и здоровье / Йога на каждый день / 2 день
            </nav>
            <div>
                <YouTube
                    videoId="oqe98Dxivns"
                    opts={opts}
                    className={s.video}
                />
            </div>
            <div className={s.work}>
                <div className={s.exercises}>
                    <h2>Упражнения</h2>
                    <ol className={s.ul}>
                        {exercises.map((el) => (
                            <li key={el.id}>
                                {el.text} {el.repetition}
                            </li>
                        ))}
                    </ol>
                    <Button
                        color={'purple'}
                        onClick={() => setModalActive(true)}
                    >
                        Заполнить свой прогресс
                    </Button>

                    <Modal
                        active={isSubmit ? isSubmit : modalActive}
                        setActive={isSubmit ? setIsSubmit : setModalActive}
                    >
                        {!isSubmit && (
                            <div className={sProgress.progressBlock}>
                                <h4 className={sProgress.myProgress}>
                                    Мой прогресс
                                </h4>
                                <form action="#" className={sProgress.form}>
                                    {exercises.map((el) => (
                                        <ProgressModalItem
                                            key={el.id}
                                            el={el}
                                        />
                                    ))}
                                </form>

                                <Button
                                    color={'purple'}
                                    onClick={() => {
                                        setIsSubmit(true), setModalActive(false)
                                    }}
                                >
                                    Отправить
                                </Button>
                            </div>
                        )}

                        {isSubmit && (
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 444 360"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_26_1621)">
                                    <rect
                                        width="444"
                                        height="360"
                                        rx="12"
                                        fill="white"
                                    />
                                    <path
                                        d="M91.3272 80H100.327C105.247 80 108.607 77.04 108.607 71.6V70.8C108.607 67.2 106.767 64.88 103.967 63.8C106.327 62.76 107.807 60.84 107.807 57.76V57.36C107.807 52.56 104.447 50 99.5272 50H91.3272V80ZM99.1272 53.68C102.127 53.68 103.807 54.88 103.807 57.68V58.08C103.807 61.2 102.047 62.44 99.2072 62.44H95.3272V53.68H99.1272ZM99.9272 66.08C102.847 66.08 104.607 67.4 104.607 70.84V71.24C104.607 74.8 102.927 76.32 99.9272 76.32H95.3272V66.08H99.9272ZM119.079 80.4C121.959 80.4 124.519 79.28 125.839 76.64V80H129.759V66C129.759 61.36 125.759 59.6 121.439 59.6C117.039 59.6 112.879 61.56 112.879 66.72H117.039C117.039 64.12 118.839 62.8 121.439 62.8C123.879 62.8 125.759 63.88 125.759 65.84C125.759 70.4 112.279 66.08 112.279 74.72C112.279 78.68 115.519 80.4 119.079 80.4ZM116.359 74.48C116.359 71.12 122.439 71.96 125.839 70.32V71.76C125.839 75.24 122.959 77.04 119.879 77.04C117.839 77.04 116.359 76.2 116.359 74.48ZM139.632 60H135.312V80H162.512V60H158.512V76.32H150.912V60H146.912V76.32H139.632V60ZM181.655 80V63.68H190.695V80L194.695 80V60H177.655V80H181.655ZM204.663 90V77C206.223 79.12 208.543 80.4 211.223 80.4C216.703 80.4 220.823 76.12 220.823 70C220.823 63.88 216.703 59.6 211.223 59.6C208.543 59.6 206.223 60.88 204.663 63V60H200.663V90H204.663ZM210.743 76.72C207.263 76.72 204.663 74.04 204.663 70C204.663 65.96 207.263 63.28 210.743 63.28C214.223 63.28 216.823 65.96 216.823 70C216.823 74.04 214.223 76.72 210.743 76.72ZM233.913 80.4C239.713 80.4 244.033 76.12 244.033 70C244.033 63.88 239.713 59.6 233.913 59.6C228.113 59.6 223.793 63.88 223.793 70C223.793 76.12 228.113 80.4 233.913 80.4ZM233.913 76.72C230.433 76.72 227.793 74.04 227.793 70C227.793 65.96 230.433 63.28 233.913 63.28C237.393 63.28 240.033 65.96 240.033 70C240.033 74.04 237.393 76.72 233.913 76.72ZM252.476 80V63.68H261.636V60H248.476V80H252.476ZM269.546 90V77C271.106 79.12 273.426 80.4 276.106 80.4C281.586 80.4 285.706 76.12 285.706 70C285.706 63.88 281.586 59.6 276.106 59.6C273.426 59.6 271.106 60.88 269.546 63V60H265.546V90H269.546ZM275.626 76.72C272.146 76.72 269.546 74.04 269.546 70C269.546 65.96 272.146 63.28 275.626 63.28C279.106 63.28 281.706 65.96 281.706 70C281.706 74.04 279.106 76.72 275.626 76.72ZM308.275 71.36C308.315 70.92 308.355 70.48 308.355 70C308.355 63.88 304.195 59.6 298.515 59.6C292.835 59.6 288.675 63.88 288.675 70C288.675 76.12 292.835 80.4 298.515 80.4C303.115 80.4 306.595 78.12 307.835 74H303.515C302.715 75.8 301.115 76.88 298.675 76.88C295.315 76.88 293.075 74.84 292.595 71.36H308.275ZM298.515 63.12C301.715 63.12 303.915 65.12 304.395 68.48H292.635C293.115 65.12 295.275 63.12 298.515 63.12ZM327.012 67.96H331.172C330.692 62.96 326.572 59.6 321.292 59.6C315.572 59.6 311.332 63.88 311.332 70C311.332 76.12 315.572 80.4 321.292 80.4C326.732 80.4 330.932 76.88 331.252 71.6H327.092C326.692 74.92 324.212 76.72 321.292 76.72C317.892 76.72 315.332 74.04 315.332 70C315.332 65.96 317.892 63.28 321.292 63.28C324.172 63.28 326.612 64.92 327.012 67.96ZM349.902 67.96H354.062C353.582 62.96 349.462 59.6 344.182 59.6C338.462 59.6 334.222 63.88 334.222 70C334.222 76.12 338.462 80.4 344.182 80.4C349.622 80.4 353.822 76.88 354.142 71.6H349.982C349.582 74.92 347.102 76.72 344.182 76.72C340.782 76.72 338.222 74.04 338.222 70C338.222 65.96 340.782 63.28 344.182 63.28C347.062 63.28 349.502 64.92 349.902 67.96ZM137.537 116.32V119.32H140.697C142.977 119.32 144.377 120.36 144.377 122.24C144.377 123.96 143.137 125.24 140.017 125.24C136.737 125.24 135.097 123.64 135.097 120.92H131.097C131.097 125.68 134.377 128.4 139.977 128.4C145.457 128.4 148.377 126.12 148.377 122.36C148.377 120.12 147.177 118.6 144.937 117.84C146.897 117 147.897 115.28 147.897 113.32C147.897 110.2 145.297 107.6 139.977 107.6C134.337 107.6 131.417 110.88 131.417 114.8H135.417C135.417 112.24 137.057 110.8 139.977 110.8C142.737 110.8 144.057 111.96 144.057 113.64C144.057 115.4 142.897 116.32 140.697 116.32H137.537ZM158.533 128.4C161.413 128.4 163.973 127.28 165.293 124.64V128H169.213V114C169.213 109.36 165.213 107.6 160.893 107.6C156.493 107.6 152.333 109.56 152.333 114.72H156.493C156.493 112.12 158.293 110.8 160.893 110.8C163.333 110.8 165.213 111.88 165.213 113.84C165.213 118.4 151.733 114.08 151.733 122.72C151.733 126.68 154.973 128.4 158.533 128.4ZM155.813 122.48C155.813 119.12 161.893 119.96 165.293 118.32V119.76C165.293 123.24 162.413 125.04 159.333 125.04C157.293 125.04 155.813 124.2 155.813 122.48ZM188.965 115.96H193.125C192.645 110.96 188.525 107.6 183.245 107.6C177.525 107.6 173.285 111.88 173.285 118C173.285 124.12 177.525 128.4 183.245 128.4C188.685 128.4 192.885 124.88 193.205 119.6H189.045C188.645 122.92 186.165 124.72 183.245 124.72C179.845 124.72 177.285 122.04 177.285 118C177.285 113.96 179.845 111.28 183.245 111.28C186.125 111.28 188.565 112.92 188.965 115.96ZM209.536 116.96C208.776 117.16 207.576 117.44 205.616 117.44C202.336 117.44 200.536 116.12 200.536 112.52V108H196.536V112.56C196.536 118.6 199.416 121.12 205.296 121.12C206.696 121.12 208.416 120.92 209.536 120.56V128H213.536V108H209.536V116.96ZM237.493 128V108H232.413L223.253 123.96V108H219.413V128H224.493L233.653 112.04V128H237.493ZM251.638 128V111.68H258.118V108H241.158V111.68H247.638V128H251.638ZM267.361 128.4C270.241 128.4 272.801 127.28 274.121 124.64V128H278.041V114C278.041 109.36 274.041 107.6 269.721 107.6C265.321 107.6 261.161 109.56 261.161 114.72H265.321C265.321 112.12 267.121 110.8 269.721 110.8C272.161 110.8 274.041 111.88 274.041 113.84C274.041 118.4 260.561 114.08 260.561 122.72C260.561 126.68 263.801 128.4 267.361 128.4ZM264.641 122.48C264.641 119.12 270.721 119.96 274.121 118.32V119.76C274.121 123.24 271.241 125.04 268.161 125.04C266.121 125.04 264.641 124.2 264.641 122.48ZM287.593 128V119.72H297.193V128L301.193 128V108L297.193 108V116.08H287.593V108H283.593V128H287.593ZM311.108 118L311.428 98H307.108L307.428 118H311.108ZM309.268 128.4C310.668 128.4 311.748 127.24 311.748 125.92C311.748 124.56 310.668 123.4 309.268 123.4C307.908 123.4 306.748 124.56 306.748 125.92C306.748 127.24 307.908 128.4 309.268 128.4Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M208.026 422.606L229.477 321.471C239.163 318.565 261.143 297.771 273.756 270.272C289.522 235.898 290.609 208.689 287.025 206.094C277.35 199.089 275.489 227.07 258.597 258.018C264.973 244.665 281.501 190.815 273.659 182.968C262.829 172.131 247.338 230.324 241.909 248.472C246.14 230.676 264.937 165.853 249.423 164.157C239.438 163.065 228.821 212.238 223.361 234.592C225.651 223.108 224.729 208.706 211.677 203.513C192.596 195.921 183.347 227.901 192.566 231.76C196.029 233.209 200.741 229.994 204.154 225.775C205.204 230.621 204.1 244.957 191.281 263.537C189.669 263.366 187.983 263.311 186.224 263.381C189.074 258.926 193.157 245.875 193.559 239.267C194.062 231.007 179.815 225.044 165.433 259.406C157.789 277.669 172.347 294.342 182.247 303.476L143.661 395.666L208.026 422.606Z"
                                        fill="#E9D4FF"
                                    />
                                    <path
                                        d="M208.026 422.606L229.477 321.471C239.163 318.565 261.143 297.771 273.756 270.272C289.522 235.898 290.609 208.689 287.025 206.094C277.35 199.089 275.489 227.07 258.597 258.018C264.973 244.665 281.501 190.815 273.659 182.968C262.829 172.131 247.338 230.324 241.909 248.472C246.14 230.676 264.937 165.853 249.423 164.157C238.499 162.963 226.818 221.932 221.962 240.123C225.615 228.257 226.942 209.587 211.677 203.513C192.596 195.921 183.347 227.901 192.566 231.76C198.265 234.145 207.349 223.895 208.454 217.332M143.661 395.666L182.247 303.476C172.347 294.342 157.789 277.669 165.433 259.406C179.815 225.044 194.062 231.007 193.559 239.267C193.157 245.875 189.074 258.926 186.224 263.381C207.456 262.534 218.011 280.003 217.509 297.355"
                                        stroke="#271A58"
                                    />
                                    <path
                                        d="M191.849 234.413C188.791 238.583 181.006 246.106 174.336 242.842"
                                        stroke="#271A58"
                                    />
                                    <path
                                        d="M191.083 214.592C193.423 216.834 196.894 223.363 192.054 231.544"
                                        stroke="#271A58"
                                    />
                                    <path
                                        d="M204.403 225.682C204.378 231.778 204.751 242.178 191.218 263.697"
                                        stroke="#271A58"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_26_1621">
                                        <rect
                                            width="444"
                                            height="360"
                                            rx="12"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        )}
                    </Modal>
                </div>
                <div className={s.result}>
                    <h2>Мой прогресс по тренировке 2:</h2>
                    {exercises.map((el) => (
                        <div key={el.id} className={s.exercise}>
                            <h3>{el.text}</h3>
                            <ProgressBar
                                completed={60}
                                className={s.progress}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OpenedCourse
