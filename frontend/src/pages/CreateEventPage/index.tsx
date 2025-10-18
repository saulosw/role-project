import { useState } from 'react';
import type { FormEvent } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as S from './styles';

interface EventForm {
  name: string;
  description: string;
  category: string;
  date: string;
  durationHours: string;
  location: string;
  coverImage: File | null;
}

function CreateEventPage() {
  const [formData, setFormData] = useState<EventForm>({
    name: '',
    description: '',
    category: '',
    date: '',
    durationHours: '',
    location: '',
    coverImage: null,
  });

  const [hasImage, setHasImage] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      coverImage: file,
    }));
  };

  const handleToggleImage = () => {
    if (hasImage) {
      setIsExiting(true);
      setTimeout(() => {
        setHasImage(false);
        setIsExiting(false);
        setFormData((prev) => ({
          ...prev,
          coverImage: null,
        }));
      }, 400);
    } else {
      setHasImage(true);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.description ||
      !formData.category ||
      !formData.date ||
      !formData.durationHours ||
      !formData.location
    ) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    console.log('Form data:', formData);
  };

  return (
    <S.PageContainer>
      <Header />
      <S.Content>
        <S.FormContainer>
          <form onSubmit={handleSubmit}>
            <S.Label htmlFor="name">
              Nome do Evento:
              <S.Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                maxLength={27}
                onChange={handleInputChange}
                required
              />
            </S.Label>
            <S.Label htmlFor="description">
              Descrição do Evento:
              <S.TextArea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                maxLength={500}
                required
              />
              <S.CharCounter>{formData.description.length}/500 caracteres</S.CharCounter>
            </S.Label>
            <S.Label htmlFor="category">
              Categoria do Evento:
              <S.Select
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
              </S.Select>
            </S.Label>
            <S.Label htmlFor="date">
              Data:
              <S.Input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </S.Label>
            <S.Label htmlFor="durationHours">
              Duração do Evento (em horas):
              <S.Input
                type="number"
                id="durationHours"
                name="durationHours"
                value={formData.durationHours}
                onChange={handleInputChange}
                min="1"
                step="0.5"
                required
              />
            </S.Label>
            <S.Label htmlFor="location">
              Localização:
              <S.Input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Endereço completo do evento"
                required
              />
            </S.Label>
            <S.ToggleContainer>
              <S.ToggleLabel htmlFor="hasImage">Adicionar Imagem de Capa:</S.ToggleLabel>
              <S.ToggleSwitch>
                <input type="checkbox" id="hasImage" checked={hasImage} onChange={handleToggleImage} />
                <span className="slider"></span>
              </S.ToggleSwitch>
            </S.ToggleContainer>
            {(hasImage || isExiting) && (
              <S.FileInputLabel isExiting={isExiting}>
                <S.FileInput
                  type="file"
                  id="coverImage"
                  name="coverImage"
                  onChange={handleFileChange}
                  accept="image/*"
                />
                <S.FileInputButton>
                  {formData.coverImage ? formData.coverImage.name : 'Escolher imagem'}
                </S.FileInputButton>
              </S.FileInputLabel>
            )}
            <S.SubmitButton type="submit">Criar Evento</S.SubmitButton>
          </form>
        </S.FormContainer>

        <S.PreviewContainer>
          <S.EventCardPreview>
            <S.CardHeader>
              <S.CardTitle>{formData.name || 'Nome do Evento'}</S.CardTitle>
              <S.CardDescription>
                {formData.description || 'Descrição do evento aparecerá aqui...'}
              </S.CardDescription>
            </S.CardHeader>
            <S.CardImageContainer>
              {formData.coverImage ? (
                <S.CardImage
                  className="event-card-image"
                  src={URL.createObjectURL(formData.coverImage)}
                  alt="Preview"
                />
              ) : (
                <S.NoImage>
                  <span>Visualização do Evento</span>
                </S.NoImage>
              )}
            </S.CardImageContainer>
            <S.CardDetails>
              {formData.category && (
                <S.CardDetail isCategoryBadge>
                  <S.DetailLabel>Categoria:</S.DetailLabel>
                  <S.DetailValue isCategory>
                    {formData.category.charAt(0).toUpperCase() + formData.category.slice(1)}
                  </S.DetailValue>
                </S.CardDetail>
              )}
              <S.CardDetail>
                <S.DetailLabel>Data:</S.DetailLabel>
                <S.DetailValue>{formData.date || '--/--/----'}</S.DetailValue>
              </S.CardDetail>
              <S.CardDetail>
                <S.DetailLabel>Duração:</S.DetailLabel>
                <S.DetailValue>{formData.durationHours ? `${formData.durationHours}h` : '--h'}</S.DetailValue>
              </S.CardDetail>
              <S.CardDetail>
                <S.DetailLabel>Local:</S.DetailLabel>
                <S.DetailValue>{formData.location || 'Local do evento'}</S.DetailValue>
              </S.CardDetail>
            </S.CardDetails>
          </S.EventCardPreview>
        </S.PreviewContainer>
      </S.Content>
      <Footer />
    </S.PageContainer>
  );
}

export default CreateEventPage;
