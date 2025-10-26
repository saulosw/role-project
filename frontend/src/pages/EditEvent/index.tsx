import { Alert, MenuItem, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEditEventForm } from '../../hooks/useEditEventForm';
import { getCategoryStyle } from '../../utils/categoryIcons';
import * as S from './styles';

function EditEventPage() {
  const { eventId } = useParams<{ eventId: string }>();
  const { register, handleSubmit, errors, isLoading, isFetching, error, watch } = useEditEventForm(eventId!);

  const formData = {
    name: watch('name') || '',
    description: watch('description') || '',
    category: watch('category') || '',
    date: watch('date') || '',
    durationHours: watch('durationHours') || '',
    location: watch('location') || '',
  };

  const categoryStyle = getCategoryStyle(formData.category);

  if (isFetching) {
    return (
      <S.PageContainer>
        <Header />
        <S.Content style={{ justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </S.Content>
        <Footer />
      </S.PageContainer>
    );
  }

  return (
    <S.PageContainer>
      <Header />
      <S.Content>
        <S.FormContainer>
          {error && (
            <Alert severity="error" sx={{ marginBottom: '1.5rem', borderRadius: '12px' }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <S.StyledTextField
              fullWidth
              label="Nome do Evento"
              placeholder="Digite o nome do evento"
              error={!!errors.name}
              helperText={errors.name?.message}
              slotProps={{
                htmlInput: { maxLength: 27 },
              }}
              {...register('name')}
            />

            <S.StyledTextField
              fullWidth
              label="Descrição do Evento"
              placeholder="Descreva seu evento"
              multiline
              rows={4}
              error={!!errors.description}
              helperText={errors.description?.message || `${formData.description.length}/500 caracteres`}
              slotProps={{
                htmlInput: { maxLength: 500 },
              }}
              {...register('description')}
            />

            <S.StyledTextField
              fullWidth
              select
              label="Categoria do Evento"
              error={!!errors.category}
              helperText={errors.category?.message}
              defaultValue=""
              {...register('category')}
            >
              <MenuItem value="">Selecione uma categoria</MenuItem>
              <MenuItem value="festa">🎉 Festa</MenuItem>
              <MenuItem value="show">🎵 Show/Concerto</MenuItem>
              <MenuItem value="workshop">📚 Workshop/Palestra</MenuItem>
              <MenuItem value="esportes">⚽ Esportes</MenuItem>
              <MenuItem value="teatro">🎭 Teatro/Cinema</MenuItem>
              <MenuItem value="networking">🤝 Networking</MenuItem>
              <MenuItem value="conferencia">🎤 Conferência</MenuItem>
              <MenuItem value="feira">🏪 Feira/Exposição</MenuItem>
              <MenuItem value="gastronomia">🍽️ Gastronomia</MenuItem>
              <MenuItem value="beneficente">💝 Beneficente</MenuItem>
              <MenuItem value="arte">🎨 Arte/Cultura</MenuItem>
              <MenuItem value="gaming">🎮 Gaming/E-sports</MenuItem>
            </S.StyledTextField>

            <S.StyledTextField
              fullWidth
              label="Data do Evento"
              type="date"
              error={!!errors.date}
              helperText={errors.date?.message}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              {...register('date')}
            />

            <S.StyledTextField
              fullWidth
              label="Duração (em horas)"
              type="number"
              placeholder="Ex: 2.5"
              error={!!errors.durationHours}
              helperText={errors.durationHours?.message}
              slotProps={{
                htmlInput: { min: 0.5, step: 0.5 },
              }}
              {...register('durationHours')}
            />

            <S.StyledTextField
              fullWidth
              label="Localização"
              placeholder="Endereço completo do evento"
              error={!!errors.location}
              helperText={errors.location?.message}
              {...register('location')}
            />

            <S.SubmitButton type="submit" disabled={isLoading} variant="contained">
              {isLoading ? <S.LoadingSpinner /> : 'Salvar Alterações'}
            </S.SubmitButton>
          </form>
        </S.FormContainer>

        <S.PreviewContainer>
          <S.EventCardPreview className="event-card-preview">
            <S.CardHeader>
              <S.CardTitle>{formData.name || 'Nome do Evento'}</S.CardTitle>
              <S.CardDescription>
                {formData.description || 'Descrição do evento aparecerá aqui...'}
              </S.CardDescription>
            </S.CardHeader>
            <S.CardImageContainer>
              {formData.category ? (
                <S.CategoryIconContainer gradient={categoryStyle.gradient}>
                  <S.CategoryIcon>{categoryStyle.icon}</S.CategoryIcon>
                </S.CategoryIconContainer>
              ) : (
                <S.PlaceholderContainer>
                  <S.PlaceholderText>Selecione uma categoria</S.PlaceholderText>
                </S.PlaceholderContainer>
              )}
            </S.CardImageContainer>
            <S.CardDetails>
              {formData.category && (
                <S.CardDetail isCategoryBadge>
                  <S.DetailLabel>Categoria:</S.DetailLabel>
                  <S.DetailValue isCategory>{categoryStyle.name}</S.DetailValue>
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

export default EditEventPage;
