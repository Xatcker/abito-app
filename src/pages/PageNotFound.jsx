import React from "react";
import { useNavigate } from "react-router"; 

export  const PageNotFound = () => {
  const navigate = useNavigate(); 

  
  const handleGoHome = () => {
    navigate("/"); 
  };

  return (
    <div style={{    display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', 
  alignItems: 'center',     
  minHeight: '100vh',
  textAlign: 'center' }}>
      <h2>404 - Страница не найдена</h2>
      <p>Извините, запрашиваемая страница не существует.</p>
     
      <button className="btn btn-primary search-btn" onClick={handleGoHome}>Вернуться на главную</button>
    </div>
  );
};

