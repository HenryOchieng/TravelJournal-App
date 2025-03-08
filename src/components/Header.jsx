import image from '../assets/worldwide.png'

export default function Header () {
    return (
        <header>
            <img src = { image } alt = "globe image" />
            <h1>My Travel Journal.</h1>
        </header>
    )
}