import Image from 'next/image';

export function Main () {
    return (
        <div className="p-4">
            <div className="card text-start">
                <Image className="card-img-top" src="/next.svg" alt="Title" width={500} height={300} />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Body</p>
                </div>
            </div>
            
        </div>
    )
}