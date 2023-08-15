import Player from './PlayerComponents/Player';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='w-[90%] mx-auto'>
        <div className="relative pb-[54.25%]">
          <div className="absolute inset-0">
            <Player src="sample-2.mp4" />
          </div>
        </div>

      </div>
 
     
    </main>
  )
}
