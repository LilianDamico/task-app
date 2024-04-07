// Arquivo: KanbanBoard.js
import React, { useState } from 'react';
import './KanbanBoard.css';

const KanbanBoard = () => {
  const [isDragging, setIsDragging] = useState(false);

  function handleDragStart(event) {
    setIsDragging(true);
    event.dataTransfer.setData('cardId', event.target.id);
  }

  function handleDragEnd() {
    setIsDragging(false);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    const draggedCardId = event.dataTransfer.getData('cardId');
    const draggedCard = document.getElementById(draggedCardId);
    event.target.appendChild(draggedCard);
  }

  return (
    <div className="boards">
      <div className="board" onDragOver={handleDragOver} onDrop={handleDrop}>
        <h3>To do</h3>
        <div className="dropzone">
          <div id="card1" className={`card ${isDragging ? 'is-dragging' : ''}`} draggable="true" onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div className="status green"></div>
            <div className="content">Projeto</div>
          </div>
        </div>
      </div>

      <div className="board" onDragOver={handleDragOver} onDrop={handleDrop}>
        <h3>In progress</h3>
        <div className="dropzone">
          {/* Adicione mais cartões aqui conforme necessário */}
        </div>
      </div>

      <div className="board" onDragOver={handleDragOver} onDrop={handleDrop}>
        <h3>Done</h3>
        <div className="dropzone">
          {/* Adicione mais cartões aqui conforme necessário */}
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
