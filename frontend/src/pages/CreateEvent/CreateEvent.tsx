import { useState } from 'react';
import type { FormEvent } from 'react';
import './CreateEvent.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

interface EventForm {
    name: string,
    description: string,
    category: string;
    date: string,
    durationHours: string,
    location: string,
    coverImage: File | null
}

const CreateEvent = () => {
  const [formData, setFormData] = useState<EventForm>({
    name: '',
    description: '',
    category: '',
    date: '',
    durationHours: '',
    location: '',
    coverImage: null as File | null
  });

  const [hasImage, setHasImage] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData(prev => ({
      ...prev,
      [fieldName]: fieldValue
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      coverImage: file
    }));
  };

  const handleToggleImage = () => {
    if (hasImage) {
      setIsExiting(true);
      setTimeout(() => {
        setHasImage(false);
        setIsExiting(false);
        setFormData(prev => ({
          ...prev,
          coverImage: null
        }));
      }, 400);
    } else {
      setHasImage(true);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.description || !formData.category || !formData.date || !formData.durationHours || !formData.location) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    console.log('Form data:', formData);

  };

  return (
    <div className='create-event-page'>
        <Header />
        <div className='create-event-content'>
        <div className='create-event-form-container'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Nome do Evento:
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      maxLength={27}
                      onChange={handleInputChange}
                      required
                    />
                </label>
                <label htmlFor="description">
                    Descrição do Evento:
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      maxLength={500}
                      required
                    />
                    <span className="char-counter">{formData.description.length}/500 caracteres</span>
                </label>
                <label htmlFor="category">
                    Categoria do Evento:
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                    >
                        <option value="">Selecione uma categoria</option>
                        <option value="festa">🎉 Festa</option>
                        <option value="show">🎵 Show/Concerto</option>
                        <option value="workshop">📚 Workshop/Palestra</option>
                        <option value="esportes">⚽ Esportes</option>
                        <option value="teatro">🎭 Teatro/Cinema</option>
                        <option value="networking">🤝 Networking</option>
                        <option value="conferencia">🎤 Conferência</option>
                        <option value="feira">🏪 Feira/Exposição</option>
                        <option value="gastronomia">🍽️ Gastronomia</option>
                        <option value="beneficente">💝 Beneficente</option>
                        <option value="arte">🎨 Arte/Cultura</option>
                        <option value="gaming">🎮 Gaming/E-sports</option>
                    </select>
                </label>
                <label htmlFor="date">
                    Data:
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                </label>
                <label htmlFor="durationHours">
                    Duração do Evento (em horas):
                    <input
                      type="number"
                      id="durationHours"
                      name="durationHours"
                      value={formData.durationHours}
                      onChange={handleInputChange}
                      min="1"
                      step="0.5"
                      required
                    />
                </label>
                <label htmlFor="location">
                    Localização:
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Endereço completo do evento"
                      required
                    />
                </label>
                <div className="toggle-container">
                    <label htmlFor="hasImage" className="toggle-label">
                        Adicionar Imagem de Capa:
                    </label>
                    <div className="toggle-switch">
                        <input
                          type="checkbox"
                          id="hasImage"
                          checked={hasImage}
                          onChange={handleToggleImage}
                        />
                        <span className="slider"></span>
                    </div>
                </div>
                {(hasImage || isExiting) && (
                    <label htmlFor="coverImage" className={`file-input-label ${isExiting ? 'file-input-label-exit' : ''}`}>
                        <input
                          type="file"
                          id="coverImage"
                          name="coverImage"
                          onChange={handleFileChange}
                          accept="image/*"
                          className="file-input"
                        />
                        <span className="file-input-button">
                            {formData.coverImage ? formData.coverImage.name : 'Escolher imagem'}
                        </span>
                    </label>
                )}
                <button type="submit" className="submit-button">Criar Evento</button>
            </form>
        </div>

        <div className='event-card-container'>
            <div className='event-card-preview'>
                <div className='event-card-header'>
                    <h2 className='event-card-title'>{formData.name || 'Nome do Evento'}</h2>
                    <p className='event-card-description'>{formData.description || 'Descrição do evento aparecerá aqui...'}</p>
                </div>
                <div className='event-card-image-container'>
                    {formData.coverImage ? (
                        <img
                            src={URL.createObjectURL(formData.coverImage)}
                            alt="Preview"
                            className='event-card-image'
                        />
                    ) : (
                        <div className='event-card-no-image'>
                            <span>Visualização do Evento</span>
                        </div>
                    )}
                </div>
                <div className='event-card-details'>
                    {formData.category && (
                        <div className='event-card-detail category-badge'>
                            <span className='detail-label'>Categoria:</span>
                            <span className='detail-value category-value'>{formData.category.charAt(0).toUpperCase() + formData.category.slice(1)}</span>
                        </div>
                    )}
                    <div className='event-card-detail'>
                        <span className='detail-label'>Data:</span>
                        <span className='detail-value'>{formData.date || '--/--/----'}</span>
                    </div>
                    <div className='event-card-detail'>
                        <span className='detail-label'>Duração:</span>
                        <span className='detail-value'>{formData.durationHours ? `${formData.durationHours}h` : '--h'}</span>
                    </div>
                    <div className='event-card-detail'>
                        <span className='detail-label'>Local:</span>
                        <span className='detail-value'>{formData.location || 'Local do evento'}</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default CreateEvent;