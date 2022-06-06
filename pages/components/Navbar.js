import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div className="Logo">
                <h1>Crawler List</h1>
            </div>
           <Link href="/"><a>Home</a></Link> 
            <Link href="/about"><a>About</a></Link>
            <Link href="/crawler"><a>Crawler Listing</a></Link>
            
        </nav>
     );
}
 
export default Navbar;