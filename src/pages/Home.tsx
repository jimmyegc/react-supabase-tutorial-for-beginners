import { SmoothieCard } from '../components/SmoothieCard';
import { supabase } from '../config/supabaseClient'
import { useEffect, useState } from 'react';

export const Home = () => {
  // console.log(supabase)

  const [fetchError, setFetchError] = useState(null)
  const [smoothies, setSmoothies] = useState(null)



  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase
        .from('smoothies')
        .select()
      if (error) {
        setFetchError('Could not fetch the smoothies.')
        setSmoothies(null)
        console.log(error)
      }
      if (data) {
        setFetchError(null)
        setSmoothies(data)
        console.log(data)
      }

    }
    fetchSmoothies()
  }, [])

  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}
      {smoothies && (
        <div className='smoothies'>

          <div className='smoothie-grid'>
            {smoothies?.map(smoothie => (
              <SmoothieCard key={smoothie.id} smoothie={smoothie} />
            ))}
          </div>
        </div>

      )}
    </div>
  );
};
