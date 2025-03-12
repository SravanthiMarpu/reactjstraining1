import React from 'react';
import './App.css';

function Breadcrumb() {
  return (
    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">About</li>
    </ol>
  </nav>
  );
}

export default Breadcrumb;
