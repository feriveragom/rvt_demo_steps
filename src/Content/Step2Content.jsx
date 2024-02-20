export default function Step2Content() {
  return (
    <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '5px', minHeight: '200px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, marginRight: '10px' }}>
          <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px', height: '100%' }}>
            <h2>Card 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula tristique dolor,
              a tristique nisi rhoncus ut. Vestibulum in fringilla mauris.
            </p>
          </div>
        </div>
        <div style={{ flex: 1, marginLeft: '10px' }}>
          <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px', height: '100%' }}>
            <h2>Card 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula tristique dolor,
              a tristique nisi rhoncus ut. Vestibulum in fringilla mauris.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
