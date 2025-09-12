import { useState } from "react";
import "../../styles/pages/submitCV.css";

const countries = ["Argentina", "Brasil", "Colombia", "Ecuador", "Chile", "Perú", "Uruguay", "Paraguay", "Bolivia"];
const studyLevels = ["Primaria", "Secundaria", "Tecnicatura", "Universitario", "Postgrado", "Master", "Otro"];
const studyStatus = ["En curso", "Finalizado", "Incompleto"];
const skillList = ["React", "Python", "MySQL", "SQL", "HTML", "CSS", "Bootstrap", "NoSQL", "AWS", "Azure", "Marketing", "Linux", "Kubernetes", "DevOps", "Recursos Humanos", "Project Management", "Energía", "Náutica", "Aeronaútica", "Salud", "Turismo", "Medio Ambiente"];
const languagesList = ["Mandarín", "Español", "Italiano", "Inglés", "Francés", "Árabe", "Portugués", "Ruso"];
const languageLevels = ["Básico", "Intermedio", "Avanzado", "Nativo"];

const SubmitCVFullPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        studies: [{ title: "", level: "", status: "" }],
        skillInput: "",
        skills: [],
        languages: [{ language: "", level: "" }],
        linkedin: "",
        behance: "",
        github: "",
        file: null,
    });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const addStudy = () => {
        setFormData(prev => ({ ...prev, studies: [...prev.studies, { title: "", level: "", status: "" }] }));
    };

    const addSkill = (skill) => {
        if (skill && !formData.skills.includes(skill)) {
            setFormData(prev => ({ ...prev, skills: [...prev.skills, skill], skillInput: "" }));
        }
    };

    const addLanguage = () => {
        setFormData(prev => ({ ...prev, languages: [...prev.languages, { language: "", level: "" }] }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, file: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos del CV:", formData);
    };

    return (
        <>
            {/* hero */}
            <section className="submitfullpage-hero">
                <div className="submitFullPage-Hero-title-container">
                    <h1 className="submitfullpage-hero-title">Tu carrera merece despegar</h1>
                </div>
                <div className="submitFullPage-hero-description-container">
                    <p>
                        Te acercamos a las empresas que valoran tu talento y te abren la puerta a nuevas oportunidades de desarrollo.
                    </p>
                </div>
            </section>

            {/* formulario */}
            <section className="submitfullpage-section">
                <form className="submitfullpage-container" onSubmit={handleSubmit}>

                    {/* 1️⃣ seccion datos personales */}
                    <div className="submitfullpage-section-block">
                        <div className="titles-form-submitcv">
                            <h3>Datos Personales</h3>
                        </div>
                        <div className="submitfullpage-form-row three-columns">
                            <input type="text" name="name" placeholder="Nombre" required value={formData.name} onChange={handleChange} />
                            <input type="text" name="lastName" placeholder="Apellido" required value={formData.lastName} onChange={handleChange} />
                            <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="submitfullpage-form-row two-columns">
                            <input type="tel" name="phone" placeholder="011 ..." required value={formData.phone} onChange={handleChange} />
                            <select name="country" required value={formData.country} onChange={handleChange}>
                                <option value="">Selecciona País</option>
                                {countries.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                    </div>

                    {/* 2️⃣ seccion estudios */}
                    <div className="submitfullpage-section-block">
                        <div className="titles-form-submitcv">
                            <h3>Estudios</h3>
                        </div>
                        {formData.studies.map((s, idx) => (
                            <div className="submitfullpage-form-row three-columns" key={idx}>
                                <input type="text" placeholder="Título" value={s.title} onChange={(e) => {
                                    const newStudies = [...formData.studies];
                                    newStudies[idx].title = e.target.value;
                                    setFormData(prev => ({ ...prev, studies: newStudies }));
                                }} required />
                                <select value={s.level} onChange={(e) => {
                                    const newStudies = [...formData.studies];
                                    newStudies[idx].level = e.target.value;
                                    setFormData(prev => ({ ...prev, studies: newStudies }));
                                }} required>
                                    <option value="">Nivel Máximo</option>
                                    {studyLevels.map(level => <option key={level}>{level}</option>)}
                                </select>
                                <select value={s.status} onChange={(e) => {
                                    const newStudies = [...formData.studies];
                                    newStudies[idx].status = e.target.value;
                                    setFormData(prev => ({ ...prev, studies: newStudies }));
                                }} required>
                                    <option value="">Estado</option>
                                    {studyStatus.map(st => <option key={st}>{st}</option>)}
                                </select>
                            </div>
                        ))}
                        <button type="button" className="submitfullpage-btn" onClick={addStudy}>+ Añadir otro estudio</button>
                    </div>

                    {/* 3️⃣ seccion habilidades */}
                    <div className="submitfullpage-section-block">
                        <div className="titles-form-submitcv">
                            <h3>Habilidades</h3>
                        </div>
                        <input
                            type="text"
                            placeholder="Escribí una habilidad"
                            value={formData.skillInput}
                            onChange={(e) => setFormData(prev => ({ ...prev, skillInput: e.target.value }))}
                            list="skill-options"
                        />
                        <datalist id="skill-options">
                            {skillList.map(skill => <option key={skill} value={skill} />)}
                        </datalist>
                        <button type="button" className="submitfullpage-btn" onClick={() => addSkill(formData.skillInput)}>Añadir Habilidad</button>
                        <div className="submitfullpage-skill-tags">
                            {formData.skills.map(skill => <span key={skill} className="submitfullpage-skill-tag">{skill}</span>)}
                        </div>
                    </div>

                    {/* 4️⃣ seccion  idiomas */}
                    <div className="submitfullpage-section-block">
                        <div className="titles-form-submitcv">
                            <h3>Idiomas</h3>
                        </div>
                        {formData.languages.map((l, idx) => (
                            <div className="submitfullpage-form-row two-columns" key={idx}>
                                <select value={l.language} onChange={(e) => {
                                    const newLangs = [...formData.languages];
                                    newLangs[idx].language = e.target.value;
                                    setFormData(prev => ({ ...prev, languages: newLangs }));
                                }} required>
                                    <option value="">Selecciona idioma</option>
                                    {languagesList.map(lang => <option key={lang}>{lang}</option>)}
                                </select>
                                <select value={l.level} onChange={(e) => {
                                    const newLangs = [...formData.languages];
                                    newLangs[idx].level = e.target.value;
                                    setFormData(prev => ({ ...prev, languages: newLangs }));
                                }} required>
                                    <option value="">Nivel</option>
                                    {languageLevels.map(level => <option key={level}>{level}</option>)}
                                </select>
                            </div>
                        ))}
                        <button type="button" className="submitfullpage-btn" onClick={addLanguage}>+ Añadir otro idioma</button>
                    </div>

                    {/* 5️⃣ seccion redes sociales */}
                    <div className="submitfullpage-section-block">
                        <div className="titles-form-submitcv">
                            <h3>Redes Sociales</h3>
                        </div>
                        <div className="submitfullpage-form-row three-columns">
                            <input type="url" name="linkedin" placeholder="Linkedin" value={formData.linkedin} onChange={handleChange} required />
                            <input type="url" name="behance" placeholder="Behance" value={formData.behance} onChange={handleChange} required />
                            <input type="url" name="github" placeholder="Github" value={formData.github} onChange={handleChange} required />
                        </div>
                    </div>

                    {/* 6️⃣ seccion subir archivos */}
                    <div className="submitfullpage-section-block">
                        <div className="titles-form-submitcv">
                            <h3>Subir Archivos</h3>
                        </div>
                        <p>Cargar CV</p>
                        <input type="file" onChange={handleFileChange} required />
                    </div>

                    <button type="submit" className="submitfullpage-send-btn">ENVIAR</button>
                </form>
            </section>
        </>
    );
};

export default SubmitCVFullPage;
