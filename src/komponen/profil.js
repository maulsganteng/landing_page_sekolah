import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function Profile() {
    return (
        <section className='pt-5 ' id='profile' >
            <div className='container text-center'>
                <h6 className='display-6 border-bottom'>Profile sekolah</h6>
                <div className='row mt-4'>
                    <div className='col md-6'>
                        <img src='https://smktibazma.sch.id/static/media/main-logo-2.7b74690f86ab4e9a4743.png' alt='Company logo' className='img-fluid rounded-circle'></img>
                    </div>
                    <div className='col md-8 mt-5'>
                        <p style={{ textAlign: 'justify' }}>
                            Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA) merupakan sekolah unggulan berasrama yang diperuntukkan bagi anak-anak tidak mampu. Pembangunan sekolah, baik fasilitas maupun operasional didanai dari hasil pengelolaan wakaf dan sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh masyarakat.
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            SMK TI BAZMA menyelenggarakan program pembelajaran yang ditempuh selama 4 tahun dengan siswa-siswa yang berasal dari berbagai daerah di seluruh Indonesia. SMK TI Bazma menyelenggarakan pendidikan dengan jurusan SIJA (Sistem Informatika, Jaringan & Aplikasi) dengan kombinasi kurikulum berbasis asrama.
                        </p>
                    </div>
                    {/* <div className='col md-6'>
                        <p style={{ textAlign: 'left' }}>
                            <strong>Contact us</strong> 
                            <br/>info@smktibazma.sch.id|+628 1111 4433 9
                        </p>
                    </div> */}
                </div>
            </div>
            <div className='container text-start'>
                <h2 className='display-6 pt-5 border-bottom'> Visi & Misi</h2>
                <h4>Visi</h4>
                <h7>Menjadi sekolah yang melahirkan generasi berkarakter unggul, berkepribadian Islami, mandiri, beprestasi dan menebar manfaat.</h7>
                <h4>Misi</h4>
                <ul className='h7'>
                    <li className=''>Menyelenggarkan Sekolah Menengah Kejuruan (SMK) yang berkualitas,</li>
                    <li>Melahirkan lulusan yang berkarakter unggul siap kerja,</li>
                    <li>Mewujudkan generasi SDM yang berdaya saing global.</li>
                </ul>
            </div>
        </section>
    );
}

export default Profile;