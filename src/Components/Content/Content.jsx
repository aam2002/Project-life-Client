// import React, { useState } from 'react';
// import './Content.css';

// function Content() {
   
//     const chapters = [
//         {
//             chapter: 'Chapter 1',
//             description: 'A short description about Chapter 1 here',
//             image: 'geeta.png',
//         },
//         {
//             chapter: 'Chapter 2',
//             description: 'A short description about Chapter 2 here',
//             image: 'geeta.png',
//         },
//         {
//             chapter: 'Chapter 3',
//             description: 'A short description about Chapter 3 here',
//             image: 'geeta.png',
//         },
//         {
//             chapter: 'Chapter 4',
//             description: 'A short description about Chapter 4 here',
//             image: 'geeta.png',
//         },
//         {
//             chapter: 'Chapter 5',
//             description: 'A short description about Chapter 5 here',
//             image: 'geeta.png',
//         },
//         {
//             chapter: 'Chapter 6',
//             description: 'A short description about Chapter 6 here',
//             image: 'geeta.png',
//         },
//         {
//             chapter: 'Chapter 7',
//             description: 'A short description about Chapter 7 here',
//             image: 'geeta.png',
//         },
//         {
//             chapter: 'Chapter 8',
//             description: 'A short description about Chapter 8 here',
//             image: 'geeta.png',
//         },
//         {
//             chapter: 'Chapter 10',
//             description: 'A short description about Chapter 1 here',
//             image: 'geeta.png',
//         },
//         {
//             chapter: 'Chapter 20',
//             description: 'A short description about Chapter 2 here',
//             image: 'geeta.png',
//         },
//         {
//             chapter: 'Chapter 30',
//             description: 'A short description about Chapter 3 here',
//             image: 'geeta.png',
//         },
//         {
//             chapter: 'Chapter 40',
//             description: 'A short description about Chapter 4 here',
//             image: 'geeta.png',
//         },
//         {
//             chapter: 'Chapter 50',
//             description: 'A short description about Chapter 5 here',
//             image: 'geeta.png',
//         },
//         {
//             chapter: 'Chapter 60',
//             description: 'A short description about Chapter 6 here',
//             image: 'geeta.png',
//         },
//         {
//             chapter: 'Chapter 70',
//             description: 'A short description about Chapter 7 here',
//             image: 'geeta.png',
//         },
//         {
//             chapter: 'Chapter 80',
//             description: 'A short description about Chapter 8 here',
//             image: 'geeta.png',
//         },
//         {
//             chapter: 'Chapter 11',
//             description: 'A short description about Chapter 1 here',
//             image: 'geeta.png',
//         },
//         {
//             chapter: 'Chapter 21',
//             description: 'A short description about Chapter 2 here',
//             image: 'geeta.png',
//         },
//         {
//             chapter: 'Chapter 31',
//             description: 'A short description about Chapter 3 here',
//             image: 'geeta.png',
//         },
//         {
//             chapter: 'Chapter 41',
//             description: 'A short description about Chapter 4 here',
//             image: 'geeta.png',
//         },
//         {
//             chapter: 'Chapter 51',
//             description: 'A short description about Chapter 5 here',
//             image: 'geeta.png',
//         },
//         {
//             chapter: 'Chapter 61',
//             description: 'A short description about Chapter 6 here',
//             image: 'geeta.png',
//         },
//         {
//             chapter: 'Chapter 71',
//             description: 'A short description about Chapter 7 here',
//             image: 'geeta.png',
//         },
//         {
//             chapter: 'Chapter 81',
//             description: 'A short description about Chapter 8 here',
//             image: 'geeta.png',
//         },
       
//     ];

//     const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

//     const nextPage = () => {
//         if (currentChapterIndex + 8 < chapters.length) {
//             setCurrentChapterIndex(currentChapterIndex + 8);
//         }
//     };

//     const previousPage = () => {
//         if (currentChapterIndex - 8 >= 0) {
//             setCurrentChapterIndex(currentChapterIndex - 8);
//         }
//     };

//     const displayedChapters = chapters.slice(currentChapterIndex, currentChapterIndex + 8);

//     return (
//         <div className='content'>
//             <div className='content-heading'>
//                 <p className='content-h'>Content</p>
//                 <p className='content-p'>Select Chapter To Start Reading</p>
//             </div>

//             <div className='content-card'>
//                 {displayedChapters.map((chapter, index) => (
//                     <div className='content-div' key={index}>
//                         <div className='content-img'>
//                             <img src={chapter.image} alt='' />
//                         </div>
//                         <div>
//                             <p className='content-chapter'>{chapter.chapter}</p>
//                             <p className='content-para'>{chapter.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//         <div className='content-dots'>
//             <div className='content-circle'></div>
//             <div className='content-circle'></div>
//             <div className='content-circle'></div>
//         </div>
//             <div className='content-button'>
//                 <button onClick={previousPage}>Previous Page</button>
//                 <button onClick={nextPage}>Next Page</button>
//             </div>
//         </div>
//     );
// }

// export default Content;








import React, { useState } from 'react';
import './Content.css';

function Content() {
    const chapters = [
                {
            chapter: 'Chapter 1',
            description: 'A short description about Chapter 1 here',
            image: 'geeta.png',
        },
        {
            chapter: 'Chapter 2',
            description: 'A short description about Chapter 2 here',
            image: 'geeta.png',
        },
        {
            chapter: 'Chapter 3',
            description: 'A short description about Chapter 3 here',
            image: 'geeta.png',
        },
        {
            chapter: 'Chapter 4',
            description: 'A short description about Chapter 4 here',
            image: 'geeta.png',
        },
        {
            chapter: 'Chapter 5',
            description: 'A short description about Chapter 5 here',
            image: 'geeta.png',
        },
        {
            chapter: 'Chapter 6',
            description: 'A short description about Chapter 6 here',
            image: 'geeta.png',
        },
        {
            chapter: 'Chapter 7',
            description: 'A short description about Chapter 7 here',
            image: 'geeta.png',
        },
        {
            chapter: 'Chapter 8',
            description: 'A short description about Chapter 8 here',
            image: 'geeta.png',
        },
        {
            chapter: 'Chapter 10',
            description: 'A short description about Chapter 1 here',
            image: 'geeta.png',
        },
        {
            chapter: 'Chapter 20',
            description: 'A short description about Chapter 2 here',
            image: 'geeta.png',
        },
        {
            chapter: 'Chapter 30',
            description: 'A short description about Chapter 3 here',
            image: 'geeta.png',
        },
        {
            chapter: 'Chapter 40',
            description: 'A short description about Chapter 4 here',
            image: 'geeta.png',
        },
        {
            chapter: 'Chapter 50',
            description: 'A short description about Chapter 5 here',
            image: 'geeta.png',
        },
        {
            chapter: 'Chapter 60',
            description: 'A short description about Chapter 6 here',
            image: 'geeta.png',
        },
        {
            chapter: 'Chapter 70',
            description: 'A short description about Chapter 7 here',
            image: 'geeta.png',
        },
        {
            chapter: 'Chapter 80',
            description: 'A short description about Chapter 8 here',
            image: 'geeta.png',
        },
        {
            chapter: 'Chapter 11',
            description: 'A short description about Chapter 1 here',
            image: 'geeta.png',
        },
        {
            chapter: 'Chapter 21',
            description: 'A short description about Chapter 2 here',
            image: 'geeta.png',
        },
        {
            chapter: 'Chapter 31',
            description: 'A short description about Chapter 3 here',
            image: 'geeta.png',
        },
        {
            chapter: 'Chapter 41',
            description: 'A short description about Chapter 4 here',
            image: 'geeta.png',
        },
        {
            chapter: 'Chapter 51',
            description: 'A short description about Chapter 5 here',
            image: 'geeta.png',
        },
        {
            chapter: 'Chapter 61',
            description: 'A short description about Chapter 6 here',
            image: 'geeta.png',
        },
        {
            chapter: 'Chapter 71',
            description: 'A short description about Chapter 7 here',
            image: 'geeta.png',
        },
        {
            chapter: 'Chapter 81',
            description: 'A short description about Chapter 8 here',
            image: 'geeta.png',
        },
        // Your chapter data here
    ];

    const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
    const [activeDotIndex, setActiveDotIndex] = useState(0);

    const nextPage = () => {
        if (currentChapterIndex + 8 < chapters.length) {
            setCurrentChapterIndex(currentChapterIndex + 8);
            setActiveDotIndex(activeDotIndex + 1);
        }
    };

    const previousPage = () => {
        if (currentChapterIndex - 8 >= 0) {
            setCurrentChapterIndex(currentChapterIndex - 8);
            setActiveDotIndex(activeDotIndex - 1);
        }
    };

    const pageCount = Math.ceil(chapters.length / 8);

    const displayedChapters = chapters.slice(currentChapterIndex, currentChapterIndex + 8);

    return (
        
        <div className='content'>
            <div className='content-heading'>
                <p className='content-h'>Content</p>
                <p className='content-p'>Select Chapter To Start Reading</p>
            </div>

            <div className='content-card'>
                {displayedChapters.map((chapter, index) => (
                    <div className='content-div' key={index}>
                        <div className='content-img'>
                            <img src={chapter.image} alt='' />
                        </div>
                        <div>
                            <p className='content-chapter'>{chapter.chapter}</p>
                            <p className='content-para'>{chapter.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='content-dots'>
                {Array.from({ length: pageCount }).map((_, index) => (
                    <div
                        className={`content-circle ${index === activeDotIndex ? 'active-dot' : ''}`}
                        key={index}
                    ></div>
                ))}
            </div>

            <div className='content-button'>
                <button onClick={previousPage}>Previous Page</button>
                <button onClick={nextPage}>Next Page</button>
            </div>
        </div>
  
    );
}

export default Content;