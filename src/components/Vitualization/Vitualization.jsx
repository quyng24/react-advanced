import { useState, useRef } from 'react';

// Component Virtualization tùy chỉnh
const VirtualList = ({ items, itemHeight, containerHeight, renderItem }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef(null);

  const totalHeight = items.length * itemHeight;
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    items.length - 1,
    Math.ceil((scrollTop + containerHeight) / itemHeight)
  );

  const visibleItems = [];
  for (let i = startIndex; i <= endIndex; i++) {
    visibleItems.push({
      index: i,
      data: items[i],
      style: {
        position: 'absolute',
        top: i * itemHeight,
        height: itemHeight,
        width: '100%',
      }
    });
  }

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      style={{
        height: containerHeight,
        overflow: 'auto',
        position: 'relative',
        border: '1px solid #ddd',
        borderRadius: '8px',
      }}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        {visibleItems.map(({ index, data, style }) => (
          <div key={index} style={style}>
            {renderItem({ index, data })}
          </div>
        ))}
      </div>
    </div>
  );
};

// Component demo sử dụng VirtualList
const VirtualizationDemo = () => {
  const items = Array.from({ length: 100000 }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
    description: `Description for item ${i}`,
  }));

  const renderItem = ({ index, data }) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        borderBottom: '1px solid #eee',
        backgroundColor: index % 2 ? '#fafafa' : '#fff',
        height: '100%',
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: '600', marginBottom: '4px' }}>
          {data.name}
        </div>
        <div style={{ fontSize: '14px', color: '#666' }}>
          {data.description}
        </div>
      </div>
      <div style={{ color: '#999', fontSize: '14px' }}>#{index}</div>
    </div>
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{fontWeight: "bold", fontSize: 40, color: '#50baf7', marginBottom: 16}}>Custom Virtualization Demo</h1>
      <p style={{ marginBottom: '16px', color: '#666' }}>
        Hiển thị 100,000 items với virtualization - chỉ render những items đang visible
      </p>
      <VirtualList
        items={items}
        itemHeight={60}
        containerHeight={500}
        renderItem={renderItem}
      />
    </div>
  );
};

export default VirtualizationDemo;