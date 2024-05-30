import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function Fasilitas() {
    return (
        <section className='py-3' id='profile' >
            <div className='container text-start'>
                <h2 className='display-6 pt-5 border-bottom'>Fasilitas Sekolah</h2>
                <div className="container text-center">
                    <div class="row justify-content-center">
                        <div className="col-4">
                            <div className="card" >
                                <img src="https://smktibazma.sch.id/static/media/r_kelas.b550b814ba15f4fff81a.jpg" className='card-img-top' alt="Image 2" />
                                <div className="card-body">
                                    <h5 className="card-title">Ruang kelas dan Lab</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card" >
                                <img src="https://smktibazma.sch.id/static/media/asrama.d1fa6eec69bfc5732828.jpg" className='card-img-top' alt="Image 2" />
                                <div className="card-body">
                                    <h5 className="card-title">Gedung Asrama</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card" >
                                <img src="https://smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg" className='card-img-top' alt="Image 2" />
                                <div className="card-body">
                                    <h5 className="card-title">Masjid dan Aula</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="https://smktibazma.sch.id/static/media/fasilitas.dfa5a4a4e6c65236542d.png" alt="Image 3" />
                </div>
            </div>
        </section>
    );
};

export default Fasilitas;