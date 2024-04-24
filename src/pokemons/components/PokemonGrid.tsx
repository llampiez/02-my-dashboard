import { SimplePokemon } from '../interfaces/simple-pokemon';
import { PokemonCard } from './PokemonCard';

type PokemonGridProps = {
  pokemons: SimplePokemon[];
};

export const PokemonGrid = ({ pokemons }: PokemonGridProps) => {
  return (
    <div className='flex flex-wrap gap-10 items-center justify-center'>
      {pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.id} {...pokemon} />;
      })}
    </div>
  );
};
