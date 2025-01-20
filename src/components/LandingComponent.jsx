import { HiArrowLongRight } from 'react-icons/hi2';

// img
import imageOne from '../assets/image01.png';
import gradientOne from '../assets/gradientRight.png'
import gradientTwo from '../assets/gradientLeft.png'

function LandingComponent() {
	return (
		<div className='flex justify-between items-center p-10 h-[70vh]  '>
			{/* left side */}
			<div className='w-[30%] flex flex-col space-y-5 items-start'>
				<h3 className='text-[#111827] text-[36px] font-extrabold dark:text-[#F9FAFB] z-30'>
					Halo! Saya Gunawan. Seorang{' '}
					<span className='from-[#F59E0B]  to-[#EF4444] bg-gradient-to-r bg-clip-text text-transparent'>
						Designer
					</span>{' '}
					dan <span className='from-[#5B21B6]  to-[#9D174D] bg-gradient-to-r bg-clip-text text-transparent'>
						Developer
					</span>
				</h3>
				<p className='text-[#374151] tracking-wide text-[18px] dark:text-[#F9FAFB]'>
					Passionate di bidang Frontend Dev dan UI/UX Design. Suka
					membangun antarmuka website yang fast-performace dan
					well-design menggunakan teknologi-teknologi terbaru.
				</p>

				<button className='bg-[#1F2937] text-white px-5 py-2 rounded-md flex items-center space-x-2 gap-[5px] text-[18px] font-light dark:bg-[#F9FAFB] dark:text-[#1F2937]'>
					Lihat Portfolio <HiArrowLongRight className='text-white dark:text-[#1F2937]' size='20' />
				</button>
			</div>

			{/* right side */}
			<div className='flex items-center justify-center w-[60%]'>
				<img src={imageOne} alt='programmer image' className='w-[60%]'/>
			</div>

      <img src={gradientOne} alt='gradient one' className='absolute bottom-0 right-0' /> 
      <img src={gradientTwo} alt='gradient two' className='absolute top-0 left-0 z-10' /> 
		</div>
	);
}

export default LandingComponent;
