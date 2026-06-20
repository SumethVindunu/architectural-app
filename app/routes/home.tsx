import type { Route } from "./+types/home";
import Navbar from "../../components/Navbar";
import { ArrowRight, ArrowUpRight, Clock, Layers, Search } from "lucide-react";
import Upload from "../../components/Upload";
import { useNavigate, useOutletContext } from "react-router";
import { useEffect, useRef, useState } from "react";
import { createProject, getProjects } from "../../lib/puter.action";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    const { userName } = useOutletContext<AuthContext>();

    const navigate = useNavigate();

    const [projects, setProjects] = useState<DesignItem[]>([]);
    const [searchId, setSearchId] = useState("");

    const isCreatingProjectRef = useRef(false);

    const handleUploadComplete = async (base64Image: string) => {
        try {
            if (isCreatingProjectRef.current) return false;

            isCreatingProjectRef.current = true;

            const newId = Date.now().toString();
            const name = `Residence ${newId}`;

            const newItem = {
                id: newId,
                name,
                sourceImage: base64Image,
                renderedImage: undefined,
                timestamp: Date.now(),
            };

            const saved = await createProject({
                item: newItem,
                visibility: "private",
            });

            if (!saved) {
                console.error("Failed to create project");
                return false;
            }

            setProjects((prev) => [saved, ...prev]);

            navigate(`/visualizer/${newId}`, {
                state: {
                    initialImage: saved.sourceImage,
                    initialRendered: saved.renderedImage || null,
                    name,
                },
            });

            return true;
        } finally {
            isCreatingProjectRef.current = false;
        }
    };

    useEffect(() => {
        const fetchProjects = async () => {
            const items = await getProjects();
            setProjects(items);
        };

        fetchProjects();
    }, []);

    // Filter projects by ID
    const filteredProjects = projects.filter((project) =>
        project.id.toString().includes(searchId.trim())
    );

    return (
        <div className="home">
            <Navbar />

            <section className="hero">
                <div className="announce">
                    <div className="dot">
                        <div className="pulse"></div>
                    </div>

                    <p>Introducing B.H.B Archi 2.0</p>
                </div>

                <h1>
                    Build beautiful spaces at the speed of thought with B.H.B
                    Archi
                </h1>

                <p className="subtitle">
                    B.H.B Archi is an AI-first design environment that helps you
                    visualize, render, and ship architectural projects faster
                    than ever.
                </p>

                <div className="actions">
                    <a href="#upload" className="cta">
                        Start Building <ArrowRight className="icon" />
                    </a>
                </div>

                <div id="upload" className="upload-shell">
                    <div className="grid-overlay" />

                    <div className="upload-card">
                        <div className="upload-head">
                            <div className="upload-icon">
                                <Layers className="icon" />
                            </div>

                            <h3>Upload your floor plan</h3>
                            <p>Supports JPG, PNG formats up to 10MB</p>
                        </div>

                        <Upload onComplete={handleUploadComplete} />
                    </div>
                </div>
            </section>

            <section className="projects">
                <div className="section-inner">
                    <div className="section-head">
                        <div className="copy">
                            <h2>Projects</h2>
                            <p>
                                Your latest work and shared community projects,
                                all in one place.
                            </p>
                        </div>

                        {/* Search Box */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                marginTop: "16px",
                            }}
                        >
                            <Search size={18} />
                            <input
                                type="text"
                                placeholder="Search by Project ID..."
                                value={searchId}
                                onChange={(e) =>
                                    setSearchId(e.target.value)
                                }
                                style={{
                                    padding: "10px",
                                    border: "1px solid #ccc",
                                    borderRadius: "8px",
                                    width: "300px",
                                }}
                            />
                        </div>
                    </div>

                    <div className="projects-grid">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map(
                                ({
                                     id,
                                     name,
                                     renderedImage,
                                     sourceImage,
                                     timestamp,
                                 }) => (
                                    <div
                                        key={id}
                                        className="project-card group"
                                        onClick={() =>
                                            navigate(`/visualizer/${id}`)
                                        }
                                    >
                                        <div className="preview">
                                            <img
                                                src={
                                                    renderedImage ||
                                                    sourceImage
                                                }
                                                alt="Project"
                                            />

                                            <div className="badge">
                                                <span>Community</span>
                                            </div>
                                        </div>

                                        <div className="card-body">
                                            <div>
                                                <h3>{name}</h3>

                                                <p
                                                    style={{
                                                        fontSize: "12px",
                                                        color: "#666",
                                                    }}
                                                >
                                                    ID: {id}
                                                </p>

                                                <div className="meta">
                                                    <Clock size={12} />
                                                    <span>
                                                        {new Date(
                                                            timestamp
                                                        ).toLocaleDateString()}
                                                    </span>
                                                    <span>
                                                        Created By {userName}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="arrow">
                                                <ArrowUpRight size={18} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            )
                        ) : (
                            <p>No projects found.</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}