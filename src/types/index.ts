export type Root = Root2[]

export interface Root2 {
  id: string
  activo: boolean
  progress: number
  stars: number
  isSeen: boolean
  versioncurso: Versioncurso
}

export interface Versioncurso {
  id: string
  nombre: string
  descripcion: string
  curso: Curso
  usuarioProgresos: UsuarioProgreso[]
}

export interface Curso {
  id: string
  nombre: string
  descripcion: string
  gradoId: number
  areaId: number
  urlPortada: string
  urlVideo: string
  colores: Colores
  grado: Grado
  area: Area
}

export interface Colores {
  text: string
  accent: string
  primary: string
  secondary: string
  background: string
}

export interface Grado {
  id: number
  nombre: string
  descripcion?: string | null;
  nivel: Nivel
}

export interface Nivel {
  id: number
  nombre: string
  descripcion?: string | null;
}

export interface Area {
  id: number
  nombre: string
  descripcion: string
}

export interface UsuarioProgreso {
  id: number
  usuarioId: string
  versionCursoId: string
  porcentajeCompletado: string
  puntosTotales: number
  ultimaActividad: string
  fechaInicio: string
  createdAt: string
  updatedAt: string
}
