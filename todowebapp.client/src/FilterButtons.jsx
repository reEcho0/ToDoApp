import React from 'react';

function FilterButtons({ onFilterChange, activeFilter }) {
    return (
        <div className="filter-buttons">
            <button
                className={activeFilter === 'all' ? 'active' : ''}
                onClick={() => onFilterChange('all')}
            >
                All
            </button>
            <button
                className={activeFilter === 'completed' ? 'active' : ''}
                onClick={() => onFilterChange('completed')}
            >
                Completed
            </button>
            <button
                className={activeFilter === 'active' ? 'active' : ''}
                onClick={() => onFilterChange('active')}
            >
                Active
            </button>
        </div>
    );
}

export default FilterButtons;