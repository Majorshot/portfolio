import { useState, useEffect, useMemo, useRef } from 'react';
import { useTransition, a } from '@react-spring/web';

function Masonry({ data }) {
  const [columns, setColumns] = useState(2);
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayedItems, setDisplayedItems] = useState(data.slice(0, 2));

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia('(min-width: 1500px)').matches) {
        setColumns(5);
        setDisplayedItems(data);
      } else if (window.matchMedia('(min-width: 1000px)').matches) {
        setColumns(4);
        setDisplayedItems(data);
      } else if (window.matchMedia('(min-width: 600px)').matches) {
        setColumns(3);
        setDisplayedItems(data);
      } else {
        setColumns(1); // Mobile devices
        setDisplayedItems(isExpanded ? data : data.slice(0, 2));
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, [data, isExpanded]);

  const ref = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const aspectRatio = 1;
  const itemWidth = width / columns;
  const itemHeight = itemWidth * aspectRatio;

  const gridItems = useMemo(() => {
    return displayedItems.map((child, i) => {
      const column = i % columns;
      const row = Math.floor(i / columns);
      const x = itemWidth * column;
      const y = itemHeight * row;
      return { ...child, x, y, width: itemWidth, height: itemHeight };
    });
  }, [columns, displayedItems, width, itemWidth, itemHeight]);

  const totalHeight = Math.ceil(displayedItems.length / columns) * itemHeight;

  const transitions = useTransition(gridItems, {
    keys: (item) => item.id,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  return (
    <div className="relative w-full">
      <div
        ref={ref}
        className="relative w-full"
        style={{ height: totalHeight }}
      >
        {transitions((style, item) => (
          <a.div
            key={item.id}
            style={style}
            className="absolute p-4 will-change-transform"
          >
            <div
              className="relative w-full h-full overflow-hidden rounded-md shadow-lg transition duration-300 ease-in-out hover:scale-105"
              style={{
                backgroundColor: '#ffffff',
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </a.div>
        ))}
      </div>
      
      <div className="md:hidden w-full flex justify-center mt-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-cyan-300 text-black px-6 py-2 rounded-lg hover:bg-cyan-400 transition-colors font-medium"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
}

export default Masonry;